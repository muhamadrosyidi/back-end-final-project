const mongoose = require('mongoose');

module.exports = () => {
    try {
        mongoose.connect(
            'mongodb://localhost/todo-app'
        );
        console.log('Connected to database.')
    } catch (error) {
        console.log('Could not connect to database.', error)
    }
}