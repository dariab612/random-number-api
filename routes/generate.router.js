const uuid = require('uuid');
const router = require('express').Router();
const { getData, writeData } = require('../store');


router
  .route('/')
  .get(async (req, res) => {
    const idToNumber = getData();

    const randomNumber = Math.floor(Math.random() * 1000) + 1;

    const id = uuid.v4();
    idToNumber[id] = randomNumber;

    writeData(idToNumber);

    res.send(randomNumber.toString());

  })

module.exports = router;
