const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const ticketsSchema= new Schema({
    username:{type:String, required:true},
    ticketnumber:{type:Number,required:true},
    siteNumber:{type:String,required:true},
    description:{type:String, required:true},
    date:{type:Date, required:true}
},{
    timestamps:true
});

const Tickets = mongoose.model('Tickets',ticketsSchema);

module.exports = Tickets;