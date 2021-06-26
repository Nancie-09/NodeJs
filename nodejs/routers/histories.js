const express = require('express');
const router = express.Router();
const History = require('../modules/History')

router.get('/', async (req,res) => {
    try{
        const histories = await History.find();
        res.json(histories);
		console.log(histories)
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;