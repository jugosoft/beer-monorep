const { Router } = require('express');
const Beer = require('../models/Beer');
const {check, validationResult} = require('express-validator');

const router = Router();

// POST /api/beer/add
router.post(
  '/add',
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
