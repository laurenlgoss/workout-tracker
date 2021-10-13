const router = require('express').Router();
const db = require('../../models');

// GET /api/workouts/
router.get('/', async (req, res) => {
  try {
    const workoutData = await db.Workout.find({});

    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST /api/workouts/
router.post('/', async (req, res) => {
  try {
    const newWorkoutData = await db.Workout.create(req.body);

    res.status(500).json(newWorkoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT /api/workouts/:id
router.put('/:id', async (req, res) => {
  try {
    // Add new exercise to respective workout
    const updatedWorkoutData = await db.Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true }
    );

    res.status(200).json(updatedWorkoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
