const request = require("request");

const forecast = (latitude, longitutde, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=8210306c94ed04ecf3ea2d211674c96e&query=${latitude},${longitutde}`;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to location services", undefined);
    } else if (response.body.error) {
      //   console.log(`${response.body.error.info}`);
      callback(
        `Unable to find that loaction, ${response.body.error.info}`,
        undefined
      );
    } else {
      const data = response.body.current;
      callback(
        undefined,
        `${data.weather_descriptions[0]}. It is currently ${data.temperature} degrees out there & it feels like ${data.feelslike} degrees`
      );
    }
  });
};

module.exports = forecast;
