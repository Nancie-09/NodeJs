const express = require('express');
const router = express.Router();
const Herb = require('../modules/Herb')

router.get('/', async (req,res) => {
    try{
        const herbs = await Herb.find();
        res.json(herbs);
		console.log(herbs)
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;