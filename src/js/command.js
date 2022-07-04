const neighbourhood = require('./neighbourhood.js');

const run = {
  generateLocation: async () => { 
    try {
      // const testing = await neighbourhood.getStructure();
      const testing = await neighbourhood.getBaliProvinceNeighbourhood();
      console.log(testing);
    } catch (error) {
      console.log(error);
    }
  },
}


module.exports = { run }; 
