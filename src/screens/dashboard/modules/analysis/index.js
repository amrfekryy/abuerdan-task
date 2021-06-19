import {useState} from 'react'
import {sample} from './sample'
import Chart from './chart'
import Insights from './insights'
import Typography from '@material-ui/core/Typography';

const apikey = 'xuOO4zPbYNWyqKalicrDMayX51VXJXZ1'

// I searched for my location by ip address to get locationKey
// https://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=xuOO4zPbYNWyqKalicrDMayX51VXJXZ1
const locationKey = "127103"

// forcasts for next 12 hours:
const accuweatherURL = `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?apikey=${apikey}&details=true`


const processData = (data) => {
  // get separate arrays for time, temprature, humidity for each hour object
  const time = { list: [] }
  const temprature = { list: [] }
  const humidity = { list: [] }

  data.map(readings => {
    const datetime = new Date(readings['DateTime'])
    time.list.push(datetime.toLocaleTimeString().replace(/([\d]+)(:[\d]{2})(:[\d]{2})(.*)/, "$1$4"))
    temprature.list.push(readings['Temperature']['Value'])
    humidity.list.push(readings['RelativeHumidity'])
  })

  // add max and min temprature and humidity
  const max_temp = Math.max(...temprature.list)
  const min_temp = Math.min(...temprature.list)
  const max_humid = Math.max(...humidity.list)
  const min_humid = Math.min(...humidity.list)

  temprature['max'] = {
    value: max_temp,
    time: time.list[temprature.list.indexOf(max_temp)]
  }
  temprature['min'] = {
    value: min_temp,
    time: time.list[temprature.list.indexOf(min_temp)]
  }
  humidity['max'] = {
    value: max_humid,
    time: time.list[humidity.list.indexOf(max_humid)]
  }
  humidity['min'] = {
    value: min_humid,
    time: time.list[humidity.list.indexOf(min_humid)]
  }
  
  return {time, temprature, humidity}
}

export const Analysis = () => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  if (!data.length) {    
    
    // Uncomment here to use sample data for testing
    // setData(sample)
    // console.log(sample)
    // setIsLoading(false) 

    // Comment the following to use sample data for testing
    // fetch data
    fetch(accuweatherURL)
    .then(response => response.json())
    .then((data=[]) => {
      if ( data.length ) { 
        console.log(data)
        setData(data) 
        setIsLoading(false)
      }
    })
    .catch(() => {
      alert('Error while fetching data!')
      setIsLoading(false)
    })
  }  

  const processedData = processData(data)

  return isLoading
    ? <div>Loading...</div>
    : <div style={{marginTop: '1rem'}}>
      <Typography variant="h6">Forcasts for temprature and humidity in Cairo for the next 12 hours</Typography>
      <Insights {...processedData}/>
      <Chart {...processedData} /> 
    </div>
    
};

