const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "You must leave content"],
        minlength: [3, "Must be more than 3 charecters"],
        unique: true
    },
    name: {
        type: String, 
        required: [true, "You must leave content"],
        minlength: [3, "Must be more than 3 charecters"],
        unique: true
    },
    type: {
        type: String, 
        required: [true, "You must leave content"],
        minlength: [3, "Must be more than 3 charecters"],
        unique: true
    },
    desc:{
        type: String, 
        required: [true, "You must leave content"],
        minlength: [3, "Must be more than 3 charecters"],
        unique: true
    },
    skill1:{
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    }
}, {timestamps: true});

mongoose.model("Note", NoteSchema);