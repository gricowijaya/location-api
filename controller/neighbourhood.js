const fetch = require('node-fetch'); // for fetching url
const fs = require('fs'); // filesystem
const neighbourhoodData = require('../data/neighbourhood.json');
// const path = require('path') // for reading path
// const { generateAvatar, getRanHex } = require('./profile.js'); // import generateAvatar function
// const { Console } = require('console');
// const _ = require('underscore');
// const neighbourhoods = []; // array for neighbourhoods

// for testing the structure example
const neighbourhood = {
  getAllNeighbourhood : async () => {
    try {
      const file = './data/neighbourhood.json'
      return JSON.parse(fs.existsSync(file)
        ? fs.readFileSync(file).toString() : ''); 
    } catch(err) {
      throw `Couldn't get the Data -> ${err}`;
    }
  },

  getNeighbourhoodDetails: async (id) => {
    try {
      // for testing
      // const response = await fetch(process.env.TESTING_URL_API);
      const url = `https://www.olx.co.id/api/locations/${id}/path`      
      const response = await fetch(url);
      let data = await response.json();
      const countryData = data.data[0]['addressComponents'][0];
      const stateData = data.data[0]['addressComponents'][1];
      const cityData = data.data[0]['addressComponents'][2];
      const neigbourhoodData = data.data[0]['addressComponents'][3];
      data = {
        neighbourhood: neigbourhoodData,
        parent: {
          state: stateData,
          city: cityData,
        }
      } 

      return data; 
    } catch(err) {
      throw `Couldn't get the Data -> ${err}`;
    }
  },

  writeNeighbourhood: async (file, lastIndex) => {
    try {
      // // get the latest id
      console.log(neighbourhoodData[neighbourhoodData.length - 1].neighbourhood.id);
      // const latestIndexInFile
      let neighbourhoods = []
      for (let i = 5000109  ; i <= lastIndex; i++ ) {
        let data = await neighbourhood.getNeighbourhoodDetails(i);
        // console.log(data);
        neighbourhoods.push(data);
        // console.log(`${data.neighbourhood.id} ${data.neighbourhood.name} has written into ${file}`);
        //
      }
      fs.writeFileSync(file, JSON.stringify(neighbourhoods));

      return neighbourhoodData;
    } catch(err) {
      throw `Couldn't get the Data -> ${err}`;
    }
  },
    

  // generateNeighbourhoodAvatar: async (neighbourhoods) => {
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
  // },

  // to iterate through the neighbourhoods data
  // iterateObject: async (neighbourhoods) => {
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
}

module.exports =  neighbourhood;
