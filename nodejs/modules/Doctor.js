const mongoose = require('mongoose');
const DoctorSchema = mongoose.Schema({
	title:{
		type:String,
		required: true
	},
	name:{
		type:String,
		required: true
	},
	intro:{
		type:String,
		required: true
	}
	
	
})
module.exports = mongoose.model('doctor', DoctorSchema);