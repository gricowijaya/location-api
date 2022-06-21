const request = require('request');
const fs = require('fs')
const kecamatans = [];

const get_location = async () => {
  for (let index = 5000001; index <= 5000040; index++) {
    const url = `https://www.olx.co.id/api/locations/${index}/path`
    const response = await fetch(url);
    const data = await response.json();
    kecamatans.push(data);
  }

  for (let index = 0; index < 4; index++) {
    console.log(kecamatans[index]['data'][0].name);
    console.log(kecamatans[index]['data'][0].type);
    console.log(kecamatans[index]['data'][0].longitude);
    console.log(kecamatans[index]['data'][0].latitude);
  }
}

get_location();
