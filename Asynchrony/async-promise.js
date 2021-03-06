const fs = require("fs");

const readFileAsArray = function(file){
  return new Promise((resolve, reject) => {
    fs.readFile(file, function(err, data) {
      if(err) return reject(err);
      const lines = data.toString().trim().split("\n");
      resolve(lines);
    })
  })
}

readFileAsArray("./numbers")
  .then( lines => {
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(number => number %2 === 1);
    console.log("Old numbers count: " ,oddNumbers.length);
  })
  .catch(err => console.error(err))