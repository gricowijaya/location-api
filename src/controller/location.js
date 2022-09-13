const neighbourhood = require('./neighbourhood');

const generateLocation =  async () => { 
  try {
    // const testing = await neighbourhood.getStructure();
    const testing = await neighbourhood.getBaliProvinceNeighbourhood();
    console.log(testing);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { generateLocation }; 
