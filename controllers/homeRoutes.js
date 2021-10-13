const router = require('express').Router();
const path = require('path');

router.get('/', async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../views/index.html'));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/stats', async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../views/pages/stats.html'));
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/exercise', async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, '../views/pages/exercise.html'));
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
