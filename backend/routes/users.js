const router = require('express').Router();
//Get the user DbSchema from 
let User = require('.../models/user.model');

//Routes for the main page
router.route('/').get((req,res)=>{
    //Mongoose promise to find all users from DB
    User.find()
    .then(user=> res.json(users))
    .catch(err=> res.status(400).json('error: '+ err));
});

router.route('/add').post((req, res)=>{
    const username = req.body.username;
    const newUser = User({username});

    newUser.save()
        .then(() => res.json('User Added!'))
        .catch(err=> res.status(400).json('error: '+ err));
});

module.exports = router;

