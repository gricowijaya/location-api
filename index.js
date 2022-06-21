const request = require('request'); // request
const buffer = require('buffer'); // request
const fs = require('fs') // filesystem
const kecamatans = []; // array for kecamatans


// for testing the structure example
const getStructure = async () => {
  const url = `https://www.olx.co.id/api/locations/5000001/path`
  const response = await fetch(url);
  const data = await response.json();
  done = data;
  // console.log(done['data'][0]);
}

// to iterate through the kecamatans data
const iterateObject = async (kecamatans) => {
  const kecamatan = [];
  kecamatans.forEach(element => {
    let object = {
      "nama_kecamatan": element.name,
      "tipe": element.type,
      "longitude": element.longitude,
      "latitude": element.latitude,
      "id_kota": element.parentId,
      "nama_kota": element['addressComponents'][2]['name']
    };
    kecamatan.push(object);
    // data.push(kecamatan);
    // data = JSON.strigify(data, null, 2);
  });
  let data = JSON.stringify(kecamatan);
  // console.log(data);
  writeData(data);
}

// get the location for all and assign the kecamatan ('NEIGHBOURHOOD')
const getLocation = async () => {
  for (let index = 5000001; index <= 5000005; index++) {
    const url = `https://www.olx.co.id/api/locations/${index}/path`
    const response = await fetch(url);
    const data = await response.json();
    kecamatans.push(data['data'][0]);
  }
  iterateObject(kecamatans);
}

// for writing the data
const writeData = async (data) => {
  // get the array 
  const text = new Uint8Array(Buffer.from(data));
  const fileName = "./kecamatan.json";
  fs.writeFile(fileName, text, (error)  => {
    if (error) throw error;
    console.log("Data Kecamatan Tersimpan !");
  });
}

// getStructure(); // to get the object example
getLocation();
