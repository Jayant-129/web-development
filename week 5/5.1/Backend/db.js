/*
    todo = {
        title : string;
        description : string; 
        completed : Boolean;
    }

*/

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://admin:PupFIrqbS5P71ERG@cluster0.oswlccr.mongodb.net/todos")
const todoschema = mongoose.Schema({
        title : String,
        description : String, 
        completed : Boolean
})

const todo = mongoose.model('todos', todoschema)

module.exports = {
    todo : todo,
};


