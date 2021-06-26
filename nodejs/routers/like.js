const express = require('express');
const router = express.Router();
const Message = require('../modules/Message.js');

//点赞
router.post('/:messageId', async (req,res) => {
	try{
		var messageId = req.params.messageId;
		console.log(messageId)
		Message.findById(messageId,
			function(err, model) {
				if(err){
					console.log(err);
					return res.send(err);
				}
			var likes = model.likes+1;
			Message.findByIdAndUpdate(messageId,
				{"likes": likes,"show":true}, 
				{safe: true, upsert: true},
				function(err, model) {
					if(err){
						console.log(err);
						return res.send(err);
					}
				return res.json(model)
			});
		});
	}catch(err){
	    res.json({message: err});
	}
});

//取消赞
router.post('/delete/:messageId', async (req,res) => {
	try{
		var messageId = req.params.messageId;
		Message.findById(messageId,
			function(err, model) {
				if(err){
					console.log(err);
					return res.send(err);
				}
			var likes = model.likes-1;
			Message.findByIdAndUpdate(messageId,
				{"likes": likes,"show":false},
				{safe: true, upsert: true},
				function(err, model) {
					if(err){
						console.log(err);
						return res.send(err);
					}
				return res.json(model)
			});
		});
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;