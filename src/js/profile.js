const { createCanvas, loadImage } = require('canvas')
const fs = require('fs') // filesystem
const { default: fetch } = require('node-fetch')

// create foreground color for every avatar (darker color)
const generateForegroundColor = async () => {
    const seed = '01122A';
    const url = `https://www.thecolorapi.com/scheme?hex=${seed}&format=json&count=1`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.colors[.na]);
}

// generate background color for every avatar (lighter color)
// const generateBackgroundColor = () => {
//
// }

// generate Avatar function to create avatar for every neighbourhood
const generateAvatar =  (text, foregroundColor, backgroundColor) => {
  try {

    // get the Initial for text
    var initials = text.match(/\b\w/g) || [];
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    console.log(initials);

    // width and const for image 
    const width = 375; 
    const height = 375; 

    // image position ( x and y) and width also height
    const imagePosition = {
      w: 200,
      h: 66,
      x: 100,
      y: 35,
    };

    // create the Canvas 
    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');
    // Draw background
    context.fillStyle = backgroundColor;                         // context background style
    context.fillRect(20, 20, canvas.width, canvas.height);         // draw a rectangle  

    // Draw text
    context.font = "bold 100px mulish";                            // font type
    context.fillStyle = foregroundColor;                             // foregroundColor
    context.textAlign = "center";                                    // text alignment
    context.textBaseline = "middle";                                 // text Base Line
    // context.fillText(initials, canvas.width / 2, canvas.height / 2); // fill the canvas using initials 
    context.fillText(initials, 200, 200); // fill the canvas using initials

    // const chacaLogo = "./resource/image/svg/chaca-logo-ka-aidil.svg" 
    const fileName = `./resource/image/png/neighbourhood/${text}.png`

    const buffer = canvas.toBuffer("image/png"); // create an png file
    fs.writeFileSync(fileName, buffer);

    // loadImage(chacaLogo).then((image) => {
    //   const { w, h, x, y } = imagePosition;
    //   context.drawImage(image, x, y, w, h);
    // 
    //   const buffer = canvas.toBuffer("image/png"); // create an png file
    //   fs.writeFileSync(fileName, buffer);
    // });

    console.log(`Profile image for ${text} has been generated in ${fileName}`);

  } catch (error) {
    console.log(error)
  }
}
  
module.exports =  { generateAvatar, generateForegroundColor };
