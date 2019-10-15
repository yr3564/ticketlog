const router= require('express').Router();
let Site= require('../models/sites.model')
router.route('/').get((req,res)=>{
    Site.find()
    .then(sites=>res.json(sites))
    .catch(err=>res.status(400).json("Found Error "+err));
})

router.route('/add').post((req,res)=>{
    const site= req.body.site;
    const lat= req.body.lat;
    const lng= req.body.lng;
    const hidden=false;
    const date= Date.parse(req.body.date)

    const newSite= new Site({
        site,
        lat,
        lng,
        hidden,
        date
    })
    newSite.save()
    .then(()=>res.json("Site Added!"))
    .catch(err=>res.status(400).json("Error has occured "= err))
})