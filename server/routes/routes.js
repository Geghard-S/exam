const notes = require("../controllers/notes");


module.exports = (app) => {
    app.get("/pets", notes.findAll);
    app.post("/pets", notes.create);
    app.get("/pets/:id", notes.findOne);
    app.get("/pets2/:id", notes.findOne);
    app.put("/pets/update/:id", notes.update);
    app.delete("/pets/:id", notes.deleteOne);
}
