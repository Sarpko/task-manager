const getAllTasks = (req, res) =>{
    res.send('get all tasks')
}

const createTask = (req, res) =>{
    res.json(req.body)
}

const getTask = (req, res) =>{
    res.json({id:req.params.id})
}

const upadateTask = (req, res) =>{
    res.send('update task')
}

const deleteTasks = (req, res) =>{
    res.send('delete tasks')
}



module.exports = {
    getAllTasks,
    createTask,
    getTask,
    upadateTask,
    deleteTasks,
}