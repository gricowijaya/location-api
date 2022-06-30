const fetch = require('node-fetch') // for fetching url
const fs = require('fs') // filesystem
const path = require('path') // for reading path
const { generateAvatar, getRanHex } = require('./profile.js'); // import generateAvatar function
const { Console } = require('console');
const neighbourhoods = []; // array for neighbourhoods

// encoding the image file
// base64_encode = (file) => {
//   let bitmap = fs.readFileSync(file);
//   return new Buffer(bitmap).toString('base64');
// }

// for testing the structure example
const getStructure = async () => {
  // latest neighbourhoods
  const url = `https://www.olx.co.id/api/locations/5007094/path`
  const response = await fetch(url);
  const data = await response.json();
  done = data;
  console.log(done['data'][0]);
}

const generateNeighbourhoodAvatar = async (neighbourhoods) => {
  neighbourhoods.forEach(async element => {
    const seed = getRanHex();
    const url = `https://www.thecolorapi.com/scheme?hex=${seed}&format=json&count=2`;
    const response = await fetch(url);
    const data = await response.json();
    const foregroundColor = data.colors[0].hex.value;
    const backgroundColor = data.colors[1].hex.value;

    console.log(`foreground is + ${foregroundColor} meanwhile background is ${backgroundColor}`);
    generateAvatar(element, foregroundColor, backgroundColor); // generateAvatar using initial check the console
  });
}

// to iterate through the neighbourhoods data
const iterateObject = async (neighbourhoods) => {
  const neighbourhood = [];
  neighbourhoods.forEach(async element => {
    let imagePath = `./resource/image/png/${element.id}_${element.name}.png`

    // create the object
    let object = {
      "id": element.id,
      "name": element.name,
      "type": element.type,
      "description": `Selamat Datang di Open Chat Wilayah ${element.name}` ,
      "longitude": element.longitude,
      "latitude": element.latitude,
      "city_id": element.parentId,
      "city_name": element['addressComponents'][2]['name'], 
      "image" : imagePath
    };
    neighbourhood.push(object);

    // data.push(neighbourhood);
    // data = JSON.strigify(data, null, 2);
  });

  let data = JSON.stringify(neighbourhood);
  // console.log(`${data}`); // see the output data
  // writeData(data).then(() => generateNeighbourhoodAvatar(neighbourhoods));   // write the Data
  generateNeighbourhoodAvatar(neighbourhoods)
  console.log(writeData(data));
}

// get the location for all and assign the neighbourhood ('NEIGHBOURHOOD')
const getLocation = async () => {
  // loop until the latest data
  for (let index = 5000050; index <= 5007094; index++) {
  // for (let index = 5000001; index <= 5000050; index++) {
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

module.exports =  { writeData, getLocation, getStructure, iterateObject, generateNeighbourhoodAvatar, neighbourhoods }
