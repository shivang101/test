const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1Ijoic2hpdmFuZzA0MDIiLCJhIjoiY2w5czdtOXlnMDk1dDNubXk2YThzOXo5dyJ9.67K2_xzMI2SSYhyLifW7wg&limit=1`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      //   console.log(`unable to connect to location services`);
      callback("unable to connect to location services", undefined);
    } else if (response.body.features.length === 0) {
      //   console.log(`Unable to find that loaction, Try another search`);

      callback("Unable to find that loaction, Try another search", undefined);
    } else {
      const latitude = response.body.features[0].center[1];
      const longitude = response.body.features[0].center[0];
      console.log(`longitude = ${longitude}\nlatitude = ${latitude}`);
      //   callback(undefined, {
      //     latitude,
      //     longitude,
      //     location: response.body.features[0].place_name,
      //   });
    }
  });
};

// data will always be undefined as longitutde
// and latitude would be loaded later and then printed
// after main call stack in completed
//but data is printed before main stack is completed so always undefined
const data = geocode("delhi");
console.log(data);
