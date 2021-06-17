import {useState} from 'react'
import {sample} from './sample'

const apikey = 'xuOO4zPbYNWyqKalicrDMayX51VXJXZ1'

// I searched for my location by ip address to get locationKey
// https://dataservice.accuweather.com/locations/v1/cities/ipaddress?apikey=xuOO4zPbYNWyqKalicrDMayX51VXJXZ1
const locationKey = "127103"

// forcasts for next 12 hours:
const accuweatherURL = `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationKey}?apikey=${apikey}&details=true`


export const Analysis = () => {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  if (!data.length) {    
    
    setData(sample)
    console.log(sample)
    setIsLoading(false) 

    // fetch(accuweatherURL)
    // .then(response => response.json())
    // .then((data=[]) => {
    //   if ( data.length ) { 
    //     console.log(data)
    //     setData(data) 
    //   }
    // })
    // .catch(() => alert('Error while fetching data!'))
    // .finally(() => setIsLoading(false))
  }  


  return isLoading
    ? <div>Loading...</div>
    : <div>
      Loaded
    </div>
};

