const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    avatar:String,
	nickname:String,
	time:String,
	content:String,
	images:[String],
	likes:Number,
	show:Boolean,
	comment:Number,
	share:Number,
	replies:[{
		avatar:String,
		nickname:String,
		content:String,
		replies:[]
	}]
});

module.exports = mongoose.model('Message', MessageSchema);