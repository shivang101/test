const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// geocode("Boston", (error, data) => {
//   console.log(`Error: ${error}`);
//   console.log("data", data);
// });

// forecast(42.3602, -71.058, (error, data) => {
//   console.log(`Error: ${error}`);
//   console.log("data", data);
// });

const address = process.argv[2];

if (address) {
  geocode(process.argv[2], (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }
    // console.log(`Error: ${error}`);
    // console.log("data", data);
    forecast(latitude, longitude, (error, forecastdata) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log("Data:", forecastdata);
    });
  });
} else {
  console.log("Please enter an location");
}
