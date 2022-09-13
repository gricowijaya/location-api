const fetch = require('node-fetch') // for fetching url
// const fs = require('fs') // filesystem
// const path = require('path') // for reading path
// const { generateAvatar, getRanHex } = require('./profile.js'); // import generateAvatar function
// const { Console } = require('console');
// const _ = require('underscore');
// const neighbourhoods = []; // array for neighbourhoods

// for testing the structure example
const getStructure = async () => {
  try {
    const response = await fetch(process.env.TESTING_URL_API);
    const data = await response.json();
    return data;
  } catch(err) {
    throw err
  }
}

// for reading file
// const readData = () => {
//   const file = './resource/data/kecamatan.json'
//   return JSON.parse(fs.existsSync(file)
//     ? fs.readFileSync(file).toString()
//     : '' 
// )}

// const generateNeighbourhoodAvatar = async (neighbourhoods) => {
//   neighbourhoods.forEach(async element => {
//     const seed = getRanHex();
//     const url = `https://www.thecolorapi.com/scheme?hex=${seed}&format=json&count=2`;
//     const response = await fetch(url);
//     const data = await response.json();
//     const foregroundColor = data.colors[0].hex.value;
//     const backgroundColor = data.colors[1].hex.value;

//     console.log(`foreground is + ${foregroundColor} meanwhile background is ${backgroundColor}`);
//     generateAvatar(element, foregroundColor, backgroundColor); // generateAvatar using initial check the console
//   });
// }

// to iterate through the neighbourhoods data
// const iterateObject = async (neighbourhoods) => {
//   const neighbourhood = [];
//   neighbourhoods.forEach(async element => {
//     let imagePath = `./resource/image/png/${element.id}_${element.name}.png`

//     // create the object
//     let object = {
//       "id": element.id,
//       "name": element.name,
//       "type": element.type,
//       "description": `Selamat Datang di Open Chat Wilayah ${element.name}` ,
//       "longitude": element.longitude,
//       "latitude": element.latitude,
//       "city_id": element.parentId,
//       "city_name": element['addressComponents'][2]['name'], 
//       "image" : imagePath
//     };
//     neighbourhood.push(object);
//     console.log(`neighourhood for this ${object.name} has been created`)
//     // data.push(neighbourhood);
//     // data = JSON.strigify(data, null, 2);
//   });

//   let data = JSON.stringify(neighbourhood);
//   // console.log(`${data}`); // see the output data
//   writeData(data).then(() => generateNeighbourhoodAvatar(neighbourhoods));   // write the Data
//   // generateNeighbourhoodAvatar(neighbourhoods)
//   // console.log(writeData(data));
// }

// const getBaliProvinceNeighbourhood = async () => {
//   // loop until the latest data
//   for (let index = 5000001; index <= 5000100; index++) {
//   // for (let index = 5000001; index <= 5000050; index++) {
//     const url = `https://www.olx.co.id/api/locations/${index}/path`
//     const response = await fetch(url);
//     const data = await response.json();
//     const province = data['data'][0].addressComponents[1].id;
//     const neighbourhood = data['data'][0].name;
//     if (province != '2000002') { 
//       break;
//       console.log(`${neighbourhood} is not from Bali moving`);
//     } else { 
//       console.log(`${neighbourhood} is from Bali and written`)
//       neighbourhoods.push(data['data'][0]);
//     }
//   }

//   // console.log(filtered);
//   iterateObject(neighbourhoods);
// }

// for writing the data
// const writeData = async (data) => {
//   // get the array 
//   const text = new Uint8Array(Buffer.from(data));
//   // const fileName = "./resource/data/neighbourhood.json"; // original
//   const fileName = "./resource/data/baliNeighbourhood.json"; // experiment
//   fs.writeFile(fileName, text, (error)  => {
//     if (error) throw error;
//     console.log(`Neighbourhood data is saved at ${fileName} !`);
//   });
// }

module.exports =  {getStructure}
