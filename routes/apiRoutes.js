const router = require("express").Router();
const db = require("../models/");

router.post("/api/workouts", (req,res) => {
  db.Workout.create({})
  .then(dbWorkout => {
    res.json(dbWorkout);
    return Workout.findOneAndUpdate({_id: dbWorkout._id}, {$push: {exercises: req.body}});
  })
  .then( result => {
    res.json(result);
  })
  .catch (err => {
    res.status(400).json(err);
  });
});

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
});

module.exports = router;