const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=8210306c94ed04ecf3ea2d211674c96e&query=delhi";

request({ url: url, json: true }, (error, response, body) => {
  const data = response.body.current;
  console.log(
    `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out there & it feels like ${data.feelslike} degrees`
  );
});

//gecoding service
const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2hpdmFuZzA0MDIiLCJhIjoiY2w5czdtOXlnMDk1dDNubXk2YThzOXo5dyJ9.67K2_xzMI2SSYhyLifW7wg&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
  const data = response.body.features;
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(`longitude = ${longitude}\nlatitude = ${latitude}`);
});