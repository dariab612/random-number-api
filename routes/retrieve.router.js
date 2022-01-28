
const router = require('express').Router();
const { getData } = require('../store');

router
  .route('/:id')
  .get(async (req, res) => {
    const idToNumber = getData();
    const { id } = req.params;
    if (!idToNumber[id]) {
      res.status(404);
      res.send('Not found');
      return;
    }
    res.send(idToNumber[id].toString());

  })

module.exports = router;
