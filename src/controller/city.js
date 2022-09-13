const fetch = require('node-fetch')
const fs = require('fs') // filesystem
const cities = []; // array for citys

// for testing the structure example
const getStructure = async () => {
  // latest cities
  const url = `https://www.olx.co.id/api/locations/5007094/path`
  const response = await fetch(url);
  const data = await response.json();
  done = data;
  console.log(done['data'][0]);
}

// to iterate through the cities data
const iterateObject = async (cities) => {
  const city = [];
  cities.forEach(element => {
    let object = {
      "id": element.id,
      "name": element.name,
      "type": element.type,
      "description": `Selamat Datang di Open Chat Wilayah ${element.name}` ,
      "longitude": element.longitude,
      "latitude": element.latitude,
      "city_id": element.parentId,
      "city_name": element['addressComponents'][2]['name'], 
      "image" : `testing_image`
    };
    city.push(object);
    // data.push(city);
    // data = JSON.strigify(data, null, 2);
  });
  let data = JSON.stringify(city);
  // console.log(data);
  writeData(data);
}

// get the location for all and assign the city ('CITY')
const getLocation = async () => {
  // loop until the latest data
  // for (let index = 5000001; index <= 5007094; index++) {
  for (let index = 5000001; index <= 5000001; index++) {
    const url = `https://www.olx.co.id/api/locations/${index}/path`
    const response = await fetch(url);
    const data = await response.json();
    cities.push(data['data'][0]);
  }
  iterateObject(cities);
}

// for writing the data
const writeData = async (data) => {
  // get the array 
  const text = new Uint8Array(Buffer.from(data));
  const fileName = "./resource/city.json";
  fs.writeFile(fileName, text, (error)  => {
    if (error) throw error;
    console.log(`City data is saved at ${fileName} !`);
  });
}

// getStructure(); // to get the object example
// getLocation();

module.exports =  {writeData, getLocation, getStructure, iterateObject}

