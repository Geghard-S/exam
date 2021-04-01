const express = require("express");
const cors = require("cors"); // cross origin resource sharing, used to let our server talk to any client

const app = express(); // initalizes the app
const PORT = 8000; // hardcode our port

// initalize middleware
// anything with app.use will impact
// all incoming and outcoing http requests
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// require our db mongoose file and routes
require("./server/config/mongoose");
require("./server/routes/routes")(app);

// finally listen on PORT
app.listen(PORT, () => console.log(`You are on Notes at port ${PORT}`));