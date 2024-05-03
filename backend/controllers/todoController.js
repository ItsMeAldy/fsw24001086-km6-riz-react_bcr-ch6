const createHttpError = require ('http-errors');
const {Todolist} = require("../models");

const getAllActivities = async (req,res) => {
    try {

        const Activities = await Todolist.findAll();

        res.status(200).json({
            status: true,
            message:'all activities retrieved succesfully',
            data: Activities,
        });
    } catch (err) {
        next(createHttpError(400, {message:err.message}));

    }
};

const createActivities = async (req, res) => {
    const {activities, deadline} = req.body;
    try {
        const data = req.body;
        const Activities = await  Todolist.create(data);

        res.status(201).json({
            status:201,
            data: Activities,
        });

    } catch (err) {
        res.status(201).json({
            status:400,
            message: err.message,
        })
    }
};

const updateActivities = async (req, res) => {
    try {
        await Todolist.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(201).json({
            status:201,
            message: "Activity successfully updated"
        });
    } catch (err) {
        res.status(201).json({
            status:400,
            message: err.message,
        })
    }
};
const deleteActivities = async (req, res) => {
    try {
        await Todolist.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(201).json({
            status:201,
            message: "Successfully deleted an Activity"
        });

    } catch (err) {
        res.status(201).json({
            status:400,
            message: err.message,
        })

    }
};
module.exports = {
    getAllActivities,
    createActivities,
    updateActivities,
    deleteActivities,
};