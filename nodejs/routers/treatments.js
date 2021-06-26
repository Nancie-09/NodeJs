const express = require('express');
const router = express.Router();
const Treatment = require('../modules/Treatment')

router.get('/', async (req,res) => {
    try{
        const treatments = await Treatment.find();
        res.json(treatments);
		console.log(treatments)
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;