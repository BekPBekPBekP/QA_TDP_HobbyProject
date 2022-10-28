const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/bcotya_db", {
    useNewUrlParser: true
});


const catSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    breed: {
        type: String,
    },
    colourMarkings: {
        type: String
    },
    personality: {
        type: String
    },
    nomination: {
        type: String
    },
    ownerDetails: {
        type: String
    },
    location: {
        type: String

    }
});

const catModel = mongoose.model("bcotya", catSchema);

module.exports = { catModel }