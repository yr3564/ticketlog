const router = require('express').Router();
//Get the user DbSchema from 
let User = require('../models/user.model');

//Routes for the main page
router.route('/').get((req,res)=>{
    //Mongoose promise to find all users from DB
    User.find()
    .then(users=> res.json(users))
    .catch(err=> res.status(400).json('error: '+ err));
});

router.route('/add').post((req, res)=>{
    const username = req.body.username;
    const newUser = User({username});

    newUser.save()
        .then(() => res.json('User Added!'))
        .catch(err=> res.status(400).json('error: '+ err));
});

router.route('./:id').delete((req,res)=>{
    User.findById(req.params.id)
    .then(user=>res.json('User was Deleted'))
    .catch(err=>res.status(400).json('Error: '+err));
})

module.exports = router;

