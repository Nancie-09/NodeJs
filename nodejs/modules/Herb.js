const mongoose = require('mongoose');
const HerbSchema = mongoose.Schema({
	name:{
		type:String,
		required: true
	},
	intro:{
		type:String,
		required: true
	},
	icon:{
		type:String,
		required: true
	}
	
})
module.exports = mongoose.model('herb', HerbSchema);