const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("*****Database Connection Established*****");
})


const userRouter  = require( './routes/users');
const ticketRouter = require('./routes/tickets')

//middleware
app.use('/users',userRouter);
app.use('/tickets',ticketRouter);

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`);
})


