const mongoose = require('mongoose');

const ReplySchema = mongoose.Schema({
    r_id:String,
	replies:[{
		avatar:String,
		nickname:String,	
		content: String,
		other: String,
	}]
});

module.exports = mongoose.model('Reply', ReplySchema);