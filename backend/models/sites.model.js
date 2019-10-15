const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const siteSchema= new Schema({
    site:{
        type:String,
        required: true,
        unique: true,
        trim: true,
        minlength:7
    },
    coords:{
        lat:Decimal128,
        lng:Decimal128
    },
    hidden: Boolean
},{
    timestamps:true
})
const Site= mongoose.model('Site',siteSchema);
module.exports =  Site;