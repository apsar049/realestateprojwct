const mongoose = require("mongoose")

const estateSchema = new mongoose.Schema({
    ppdid : {type : String , required : true},
    image : {type : String , required : true},
    property : {type : String , required : true},
    conatct : Number,
    area :   Number,
    views : Number,
    status : {type : String , required : true},
    daysleft : Number
})

const Estate = mongoose.model('Estate',estateSchema)
exports.model = Estate;