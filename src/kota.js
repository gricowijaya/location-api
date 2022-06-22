const fetch = require('node-fetch') // change to node-fetch
const fs = require('fs') // filesystem
const kotas = []; // array for kotas


// for testing the structure example
const getStructure = async () => {
  // latest kotas
  const url = `https://www.olx.co.id/api/locations/4000001/path`
  const response = await fetch(url);
  const data = await response.json();
  done = data;
  // console.log(done);
  console.log(done['data'][0]);
}

// to iterate through the kotas data
const iterateObject = async (kotas) => {
  const kota = [];
  kotas.forEach(element => {
    let object = {
      "nama_kota": element.name,
      "tipe": element.type,
      "longitude": element.longitude,
      "latitude": element.latitude,
      "id_kota": element.parentId,
      "nama_kota": element['addressComponents'][2]['name']
    };
    kota.push(object);
    // data.push(kota);
    // data = JSON.strigify(data, null, 2);
  });
  let data = JSON.stringify(kota);
  // console.log(data);
  writeData(data);
}

// get the location for all and assign the kota ('NEIGHBOURHOOD')
const getLocation = async () => {
  // loop until the latest data
  for (let index = 4000001; index <= 4000001; index++) {
    const url = `https://www.olx.co.id/api/locations/${index}/path`
    const response = await fetch(url);
    const data = await response.json();
    kotas.push(data['data'][0]);
  }
  iterateObject(kotas);
}

// for writing the data
const writeData = async (data) => {
  // get the array 
  const text = new Uint8Array(Buffer.from(data));
  const fileName = "./kota.json";
  fs.writeFile(fileName, text, (error)  => {
    if (error) throw error;
    console.log("Data kota Tersimpan !");
  });
}

// getStructure(); // to get the object example
getLocation();
