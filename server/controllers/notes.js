const mongoose = require("mongoose");
const Note = mongoose.model("Note");

module.exports ={
    create: (req, res) => {
        Note.create(req.body)
            .then(note => {
                console.log(note);
                res.json(note);
            })
            .catch(err => res.status(400).json(err))
    },
    findAll: (req, res) => {
        Note.find()
            .then(notes => {
                console.log(notes);
                res.json(notes);
            })
            .catch(err => res.status(400).json(err))
    },
    findOne: (req, res) => {
        Note.find({_id: req.params.id})
            .then(note => {
                console.log(note);
                res.json(note);
            })
            .catch(err => res.status(400).json(err))
    },
    update: (req, res) => {
        Note.findOneAndUpdate({_id: req.params.id},req.body,{new:true,useFindAndModify:false})
            .then(note => {
                console.log(note);
                res.json(note);
            })
            .catch(err => res.status(400).json(err))
    },
    deleteOne: (req, res) => {
        Note.findOneAndDelete({_id: req.params.id})
            .then(deleted => {
                console.log(deleted);
                res.json(deleted);
            })
            .catch(err => res.status(400).json(err))
    },

}