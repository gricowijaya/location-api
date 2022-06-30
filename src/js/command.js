const neighbourhood = require('./neighbourhood.js');
const profileImageGenerator = require('./profile.js');

const run = () => { 
  try {
    neighbourhood.getLocation();
    // profileImageGenerator.generateAvatar('Abiansemal Bali', 'black', 'white');
    // profileImageGenerator.generateForegroundColor()
  } catch (error) {
    console.log(`There's an error -> ${error}`)
  }
}

module.exports = { run }; 
