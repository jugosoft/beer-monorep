const {Router} = require('express')
const {check, validationResult} = require('express-validator')
const router = Router()


// POST /api/auth/register
router.post(
  '/register',
  [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Минимальная длина пароля 6 символов')
      .isLength({ min: 6 })
  ],
  async (req, res) => {
      console.log('incomming request');
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      console.log('na servere znayut, chto ti - pidor');
    }
});


router.get(
  '/register',
  async (req, res) => {
    res.status(200).json({ message: 'Ok idi na xui' });
  });

module.exports = router