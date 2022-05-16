const router = require('express').Router();

router.get('/usertest', (req, res) => {
  res.send('user teat is successfully');
});

router.post('/userposttest', (req, res) => {
  const username = req.body.username;
  res.send(`you are now ${username}`);
});

module.exports = router;
