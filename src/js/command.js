const neighbourhood = require('./neighbourhood.js');

const run = {
  generateLocation: async () => { 
    try {
      const getLocation = neighbourhood.getLocation();
      console.log(getLocation);
    } catch (error) {
      console.log(error);
    }
  },
}


module.exports = { run }; 
