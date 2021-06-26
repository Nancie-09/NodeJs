const mongoose = require('mongoose');
const TreatmentSchema = mongoose.Schema({
	name:String,
	type:[
		{
			icon:String,
			color:String,
			name:String,
			intro:String,
			effect:String,
			theory:String
		}
	]
	
	
})
module.exports = mongoose.model('treatment', TreatmentSchema);