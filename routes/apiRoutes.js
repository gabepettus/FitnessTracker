const router = require("express").Router();
const db = require("../models/");

router.post("/api/workouts", (req,res) => {
  console.log("XXXX post api/workouts XXXX");
  console.log("req.body",req.body);
  console.log("XXXX^^^^^^^XXXX");

  // console.log("res",res);
  db.Workout.create({})
  .then(dbWorkout => {
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

router.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true, runValidators: true }
        )
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });

router.put("/api/turd/:id", (req,res) => {
  console.log("XXXX put api/workouts XXXX");
  console.log("id",req.params.id);
  console.log("req.body",req.body);
  console.log("XXXX^^^^^^^XXXX");

  // console.log("res",res);
    return db.Workout.findOneAndUpdate(
      {_id: req.params.id}, 
      {$push: {exercises: req.body}}
    )
});

// router.put("/api/workouts/:id", function(req, res) {
router.put("/api/turd/:id", function(req, res) {
  // const specified_id = req.params.id;

  console.log("XXXX post api/workouts/:id XXXX");
  console.log("id",req.params.id);
  console.log("req.body",req.body);
  console.log("XXXX^^^^^^^XXXX");

  db.Workout.findByIdAndUpdate(
    req.params.id,
    {$push:{exercises:req.body}},
    (err, workoutUpdate) => {
      if (err) {
        res.json({
          success: false,
          msg: "failure" 
        });
      } else {
        res.json({workoutUpdate, success: true, msg: "success"});
      }
    }
  )
  .catch (err => {
    res.json(err);
  });
  // .then(dbWorkout => {
    // console.log("update workout dbWorkout", dbWorkout);
    // console.log("dbWorkout._id", dbWorkout._id);

    // res.json(dbWorkout);

    // return db.Workout.findOneAndUpdate(
      // {id: dbWorkout._id}, 
      // {$push: {exercises: req.body}}
    // );
  // })
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