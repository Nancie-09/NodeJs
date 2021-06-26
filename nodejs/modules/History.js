const mongoose = require('mongoose');
const HistorySchema = mongoose.Schema({
	name:String,
	intro:String
})
module.exports = mongoose.model('history', HistorySchema);