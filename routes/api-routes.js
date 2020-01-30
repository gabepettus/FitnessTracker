const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req,res) => {
  Workout.create({})
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

router.get("api/workouts", (req, res) => {
  Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    console.log("in get",Worker);
    res.status(400).json(err);
  });
});

router.get("api/workouts/range", (req, res) => {
  Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch(err => {
    console.log("in get",Worker);
    res.status(400).json(err);
  });
});

module.exports = router;