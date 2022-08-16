const mongoose = require('mongoose');
const schema = mongoose.Schema;


const todoSchema = new schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;