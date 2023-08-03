const express = require("express");
const router = express.Router();
const {
    getAllGoals, getGoal, createGoal, updateGoal, deleteGoal,
} = require("../controller/goalController");
const { create } = require("../models/goal");

router.route("/").get(getAllGoals).post(createGoal);
router.route("/:goalId").patch(updateGoal).delete(deleteGoal).get(getGoal);

module.exports = router;