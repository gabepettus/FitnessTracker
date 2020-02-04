const router = require("express").Router();
const db = require("../models/");

router.post("/api/workouts", (req,res) => {
  console.log("XXXX post api/workouts XXXX");
  console.log("req.body",req.body);
  console.log("XXXX^^^^^^^XXXX");

  // console.log("res",res);
  db.Workout.create({})
  .then(dbWorkout => {
    console.log("new workout dbWorkout", dbWorkout);
    console.log("dbWorkout._id", dbWorkout._id);

    res.json(dbWorkout);

    return db.Workout.findOneAndUpdate(
      {_id: dbWorkout._id}, 
      {$push: {exercises: req.body}}
    );
  })
  .catch (err => {
    res.json(err);
  });
});

router.post("/api/workouts/:id", function(req, res) {
  // const specified_id = req.params.id;

  console.log("XXXX post api/workouts/:id XXXX");
  console.log("id",req.params.id);
  console.log("req.body",req.body);
  console.log("XXXX^^^^^^^XXXX");

  console.log("update id",req.params.id);
  db.Workout.findByIdAndUpdate({id: req.params.id})
  .then(dbWorkout => {
    console.log("update workout dbWorkout", dbWorkout);
    console.log("dbWorkout._id", dbWorkout._id);

    res.json(dbWorkout);

    return db.Workout.findOneAndUpdate(
      {_id: dbWorkout._id}, 
      {$push: {exercises: req.body}}
    );
  })
  .catch (err => {
    res.json(err);
  });

  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.json(false);
});

router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch (err => {
    res.json(err);
  });
});

router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch (err => {
    res.json(err);
  });
});

module.exports = router;