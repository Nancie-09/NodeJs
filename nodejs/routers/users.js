const express = require('express');
const router = express.Router();
const User = require('../modules/user')

router.get('/', async (req,res) => {
    try{
        const users = await User.find();
        res.json(users);
		console.log(users)
    }catch(err){
        res.json({message: err});
    }
});
router.get('/login', async (req,res) => {
    try{
        const user = await User.findOne({name:req.query.name,password:req.query.password});
        res.json(user);
		console.log(user)
    }catch(err){
        res.json({message: err});
    }
});
router.get('/findByName', async (req,res) => {
    try{
        const user = await User.findOne({name:req.query.name});
        res.json(user);
		console.log(user)
    }catch(err){
        res.json({message: err});
    }
});

router.post('/add',async (req,res)=>{
	const user = new User({
		name: req.body.user.name,
		password: req.body.user.password,
		avatar:req.body.user.avatar,
		nickname:req.body.user.nickname
	});
	console.log("user:"+user)
	try{
		const savedUser = await user.save()
		res.json(savedUser);
	}catch(err){
		res.json({message: err});
	}
})

router.post('/:userId', async (req,res) => {
    try{
    	var userId = req.params.userId;
		console.log(req.body)
    	User.findByIdAndUpdate(userId,
    		{ "nickname":req.body.nickname,"password":req.body.password},
    		{safe: true, upsert: true},
    		function(err, model) {
    			if(err){
    				console.log(err);
    				return res.send(err);
    			}
				return res.json("success");
    	});
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;