const fetch = require('node-fetch')
const fs = require('fs') // filesystem
const neighbourhoods = []; // array for neighbourhoods


// for testing the structure example
const getStructure = async () => {
  // latest neighbourhoods
  const url = `https://www.olx.co.id/api/locations/5007094/path`
  const response = await fetch(url);
  const data = await response.json();
  done = data;
  console.log(done['data'][0]);
}

// to iterate through the neighbourhoods data
const iterateObject = async (neighbourhoods) => {
  const neighbourhood = [];
  neighbourhoods.forEach(element => {
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
    neighbourhood.push(object);
    // data.push(neighbourhood);
    // data = JSON.strigify(data, null, 2);
  });
  let data = JSON.stringify(neighbourhood);
  // console.log(data);
  writeData(data);
}

// get the location for all and assign the neighbourhood ('NEIGHBOURHOOD')
const getLocation = async () => {
  // loop until the latest data
  // for (let index = 5000001; index <= 5007094; index++) {
  for (let index = 5000001; index <= 5000002; index++) {
    const url = `https://www.olx.co.id/api/locations/${index}/path`
    const response = await fetch(url);
    const data = await response.json();
    neighbourhoods.push(data['data'][0]);
  }
  iterateObject(neighbourhoods);
}

// for writing the data
const writeData = async (data) => {
  // get the array 
  const text = new Uint8Array(Buffer.from(data));
  const fileName = "./resource/data/neighbourhood.json";
  fs.writeFile(fileName, text, (error)  => {
    if (error) throw error;
    console.log(`Neighbourhood data is saved at ${fileName} !`);
  });
}

// getStructure(); // to get the object example
// getLocation();

module.exports =  {writeData, getLocation, getStructure, iterateObject}
