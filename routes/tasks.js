const express = require('express');
const router = express.Router();

const {
    getAllTasks,
    createTask,
    getTask,
    upadateTask,
    deleteTasks
} = require('../controllers/tasks')


router.route('/').get(getAllTasks).post(createTask)
router.route("/:id").get(getTask).patch(upadateTask).delete(deleteTasks)

module.exports = router

