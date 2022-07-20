const Task = require('../models/taskModel')
const express = require('express');

const router = express.Router();

router.post('/input', async (req, res) => {
    try {
        const task = await new Task(req.body).save();
        res.send(task);
        console.log('Task saved');
    } catch (err) {
        res.send(err);
        console.log(error);
    }
})

router.get('/allTask', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
        console.log('Here is All Your Tasks');
    } catch(err){
        res.send(err);
        console.log(error);
    }
});

router.put('/update/:id', async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            {_id: req.params.id},
            req.body
        )
        res.send(task)
        console.log('task updated');
    } catch (error) {
        res.send(error);
        console.log(error);
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send(task);
        console.log('Task deleted');
    } catch (error) {
        res.send(error);
        console.log(error);
    }
});

module.exports = router;