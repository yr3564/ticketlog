const router = require('express').Router();
let Ticket = require('../models/tickets.model');

router.route('/').get((req,res)=>{
    Ticket.find()
    .then(tickets=>res.json(tickets))
    .catch(err=>res.status(400).json('error'+ err));
});

router.route('/add').post((req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const date = Date.parse(req.body.date);
    const ticketnumber = Number(req.body.ticketnumber);
    const siteNumber = req.body.siteNumber;

    const newTicket = new Ticket({
        username,
        description,
        ticketnumber,
        siteNumber,
        date,
    });

    newTicket.save()
    .then(()=> res.json('Ticket Added!'))
    .catch(err => res.status(400).json('Error'+ err))
});

router.route('/id').get((req,res)=>{
    Ticket.findById(req.params.id)
    .then(ticket => res.json(ticket))
    .catch(err=> res.status(400).json('Error:'+err));
});

router.route('/:id').delete((req,res)=>{
    Ticket.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Exercise deleted.'))
    .catch(err=> res.status(400).json('Error: '+ err));
})

router.route('/update/:id').post((req,res)=>{
    Ticket.findById(req.params.id)
    .then(ticket =>{
        ticket.username = req.body.username;
        ticket.description= req.body.description;
        ticket.date=Date.parse(req.body.date);
        ticket.ticketnumber=Number(req.body.ticketnumber);
        ticket.siteNumber=req.body.siteNumber;

        ticket.save()
        .then(()=>res.json('Exercise Updated!'))
        .catch(err=>res.status(400).json('Error '+err));
    })
    .catch(res=>res.status(400).json('Error '+err));
})

module.exports = router;