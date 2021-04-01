const mongoose = require('mongoose');
const db = "march-notes";

mongoose.connect(`mongodb://localhost/${db}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
})
    .then(() => console.log(`Connected ${db}`))
    .catch((err) => console.log(`Failed ${db}`, err))

require("../models/Note");