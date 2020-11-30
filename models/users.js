const mongoose = require('mongoose');
const schema = mongoose.Schema;

const usersSchema =schema({
    name:{
        type:String,
        required:true
    },
    address:String,
    phoneNo:Number
});

module.exports = mongoose.model("user",usersSchema);