const { getAllActivities, createActivities, deleteActivities, updateActivities } = require("../controllers/todoController");

const router = require ("express").Router();

router.get("/", getAllActivities);
router.post("/create", createActivities);
router.patch("/update/:id", updateActivities);
router.delete("/delete/:id", deleteActivities);

module.exports = router;