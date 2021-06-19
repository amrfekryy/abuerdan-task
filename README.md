
## Running Project

- download or clone repository.
- In the project directory:
  - install dependencies: `npm install`
  - run project: `npm start`

## Note:
- https://developer.accuweather.com/ limits free accounts to 50 requests per day. Please use them wisely and don't open "Dashboard > Analysis" repeatedly.
- In case you ran out of requests, you can still use "sample data" to display the dashboard:
  - open `src/screens/dashboard/modules/analysis/index.js` in your editor
  - uncomment lines 64-66
  - comment lines 70-82