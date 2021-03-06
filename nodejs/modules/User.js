const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
	nickname:{
		type:String,
		required:true
	},
    password: {
        type: String,
        required: true
    },
    avatar: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('user', UserSchema);