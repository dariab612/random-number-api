const fs = require('fs');
const fileName = 'idToNumber.json';

const getData = () => {
  let idToNumber;
  try {
    let rawdata = fs.readFileSync(fileName);
    idToNumber = JSON.parse(rawdata);
  }
  catch {
    idToNumber = {};
  }
  return idToNumber;
}

const writeData = (idToNumber) => {
  try {
    let data = JSON.stringify(idToNumber);
    fs.writeFileSync(fileName, data);
  }
  catch (err) {
    console.error(err);
  }
}

module.exports = { getData, writeData };

