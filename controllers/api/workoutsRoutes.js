const router = require('express').Router();
const db = require('../../models');

router.get('/', async (req, res) => {
  try {
    const workoutData = await db.Workout.find({});

    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    // Add new Exercise to respective Workout
    const workoutData = await db.Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true },
    );

    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
