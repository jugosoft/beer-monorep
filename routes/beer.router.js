const { Router } = require('express');
const Beer = require('../models/Beer');
const {check, validationResult} = require('express-validator');

const router = Router();

// POST /api/beer/get
router.get(
  '/get',
  [],
  async (req, res) => {

    try {

      const perPage = 10;
      const page = req.query.page;

      const beers = await Beer.find()
        .limit(perPage)
        .skip(perPage * page);

      if (!beers) {
        res.status(400).json({ message: 'Beers not found' });
      }
    
      res.status(200).json({ message: 'Beers are loaded', beers });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server Error' });
  }

});

// POST /api/beer/post
router.post(
  '/post',
  [
    check('beerName', 'Beer Name is requierd').notEmpty()
  ],
  async (req, res) => {

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(500).json({
        errors: errors.array(),
        message: 'Invalid beer data'
      });      
    }

    const { beerName, beerType, beerColour, beerAlcohol } = req.body;

    try {
      const beer = new Beer({ beerName, beerType, beerColour, beerAlcohol });

      await beer.save();

      res.status(201).json({ message: 'Beer is added' });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server Error' });
  }

});

module.exports = router;
