const router = require ("express").Router();

const Todolist = require ('./todoRouter');
router.use("/api/v1/todolist", Todolist);

module.exports = router;