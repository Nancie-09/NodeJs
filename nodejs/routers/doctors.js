const express = require('express');
const router = express.Router();
const Doctor = require('../modules/Doctor')

router.get('/', async (req,res) => {
    try{
        const doctor = await Doctor.find();
        res.json(doctor);
		console.log(doctor)
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;