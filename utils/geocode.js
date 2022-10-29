const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoic2hpdmFuZzA0MDIiLCJhIjoiY2w5czdtOXlnMDk1dDNubXk2YThzOXo5dyJ9.67K2_xzMI2SSYhyLifW7wg&limit=1`;

  request({ url, json: true }, (error, { body } = response) => {
    if (error) {
      callback("unable to connect to location services", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find that loaction, Try another search", undefined);
    } else {
      const latitude = body.features[0].center[1];
      const longitude = body.features[0].center[0];
      callback(undefined, {
        latitude,
        longitude,
        location: body.features[0].place_name,
      });
    }
  });
};

// geocode("delhi", (error, data) => {
//   console.log(`Error: ${error}`);

//   console.log("data", data);
//   //   console.log(`data, ${JSON.stringify(data)}`);
// });

module.exports = geocode;
