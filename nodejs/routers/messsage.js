const express = require('express');
const router = express.Router();
const Message = require('../modules/Message.js');
const Reply = require('../modules/Reply.js');
// 获取论坛列表
router.get('/', async (req,res) => {
    try{
        const messages = await Message.find();
		const replies = await Reply.find();
		for( var i = 0; i < messages.length; i++){
			for(var j = 0; j < messages[i].replies.length; j++){
				for(var k = 0; k < replies.length; k++) {
					if(messages[i].replies[j]._id.equals(replies[k].r_id)) {
						messages[i].replies[j].replies = replies[k].replies;
						
					}
				}
			}
		}
        res.json(messages);
    }catch(err){
        res.json({message: err});
    }
});

// 增加帖子
router.post('/', async (req,res) => {
	// console.log(req.body)
    const message = new Message(req.body.message);
    try{
        const savedMessage = await message.save()
        res.json(savedMessage);
    }catch(err){
        res.json({message: err});
    }
});

//增加一级评论
router.post('/:messageId', async (req,res) => {
	try{
		var messageId = req.params.messageId;
		Message.findByIdAndUpdate(messageId,
			{ $push: {"replies": req.body.reply}},
			{safe: true, upsert: true},
			function(err, model) {
				if(err){
					console.log(err);
					return res.send(err);
				}
			Message.findById(messageId,
				function(err, model) {
					if(err){
						console.log(err);
						return res.send(err);
					}
				var comment = model.comment+1;
				Message.findByIdAndUpdate(messageId,
					{"comment": comment},
					{safe: true, upsert: true},
					function(err, model) {
						if(err){
							console.log(err);
							return res.send(err);
						}
				});
			});
			Message.findById(messageId,
				function(err, mod) {
					if(err){
						console.log(err);
						return res.send(err);
					}
					var r_id = mod.replies[mod.replies.length-1]._id;
					const reply = new Reply({
						r_id: r_id,
						replies:[]
					});
					const savedReply = reply.save()
					res.json(mod);
			});
		});
		
    }catch(err){
        res.json({message: err});
    }
});

// 删除一级评论
router.post('/delete/:messageId/:replyId', async (req,res) => {
	try{
		var messageId = req.params.messageId;
		var replyId = req.params.replyId;
		Reply.findOne({"r_id":replyId},
			function(err, model) {
				if(err){
					console.log(err);
					return res.send(err);
				}
				var count = model.replies.length;
				Message.findById(messageId,
					function(err, model) {
						if(err){
							console.log(err);
							return res.send(err);
						}
					var comment = model.comment-count-1;
					Message.findByIdAndUpdate(messageId,
						{"comment": comment},
						{safe: true, upsert: true},
						function(err, model) {
							if(err){
								console.log(err);
								return res.send(err);
							}
					});
				});
				Reply.findOneAndDelete({"r_id":replyId},
					function(err, model) {
						if(err){
							console.log(err);
							return res.send(err);
						}
						return res.json(model);
				});
		});
		Message.findByIdAndUpdate(messageId,
			{ $pull: {"replies": {"_id":replyId}}},
			{safe: true, upsert: true},
			function(err, model) {
				if(err){
					console.log(err);
					return res.send(err);
				}
				// return res.json(model);
		});
		
    }catch(err){
        res.json({message: err});
    }
});

// 增加二级评论
router.post('/:messageId/:replyId', async (req,res) => {
	try{
		var messageId = req.params.messageId;
		var replyId = req.params.replyId;
		Message.findById(messageId,
			function(err, model) {
				if(err){
					console.log(err);
					return res.send(err);
				}
			var comment = model.comment+1;
			Message.findByIdAndUpdate(messageId,
				{"comment": comment},
				{safe: true, upsert: true},
				function(err, model) {
					if(err){
						console.log(err);
						return res.send(err);
					}
			});
			
		});
		Reply.findOneAndUpdate({"r_id":replyId},
			{ $push: {"replies": req.body.reply}},
			{safe: true, upsert: true},
			function(err, model) {
				if(err){
					console.log(err);
					return res.send(err);
				}
			res.json(model);
		});
    }catch(err){
        res.json({message: err});
    }
});

// 删除二级评论
router.post('/delete/:messageId/:replyId/:id', async (req,res) => {
	try{
		var messageId = req.params.messageId;
		var replyId = req.params.replyId;
		var id = req.params.id;
		Message.findById(messageId,
			function(err, model) {
				if(err){
					console.log(err);
					return res.send(err);
				}
			var comment = model.comment-1;
			Message.findByIdAndUpdate(messageId,
				{"comment": comment},
				{safe: true, upsert: true},
				function(err, model) {
					if(err){
						console.log(err);
						return res.send(err);
					}
			});
		});
		Reply.findOneAndUpdate({"r_id":replyId},
			{ $pull: {"replies": {"_id":id}}},
			{safe: true, upsert: true},
			function(err, model) {
				if(err){
					console.log(err);
					return res.send(err);
				}
				return res.json(model);
		});
    }catch(err){
        res.json({message: err});
    }
});


module.exports = router;