const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema= new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        minlength:3
    },
},{
    timestamp:true,
});

const User = mongoose.model('User', userSchema);

model.exports = User;