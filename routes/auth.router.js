const {Router} = require('express');
const User = require('../models/User');
const {check, validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');
const router = Router();

// POST /api/auth/register
router.post(
  '/register',
  [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(500).json({
        errors: errors.array(),
        message: 'Invalid registration data'
      });      
    }

    // Pasrse it from request's body
    const {email, password} = req.body;

    try {
      
      const candidate = await User.findOne({ email: email });
      
      if (candidate) {
        return res.status(400).json({ message: 'USer already exists' });
      }

      const hashedPassword = await bcryptjs.hash(password, 12);

      const user = new User({ email: email, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: 'User is created' });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server Error' });
  }

});

// get zapros na registraciyu? ser'ezno??
router.get(
  '/register',
  async (req, res) => {
    res.status(200).json({ message: 'Ok idi na xui' });
  });

module.exports = router;