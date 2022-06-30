const kecamatan = require('./neighbourhood.js');
const profileImageGenerator = require('./profile.js');

const run = () => { 
  try {
    kecamatan.getLocation();
    // profileImageGenerator.generateAvatar('Abiansemal Bali', 'black', 'white');
  } catch (error) {
    console.log(`There's an error -> ${error}`)
  }
}

module.exports = { run }; 
