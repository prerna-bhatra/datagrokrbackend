const Post=require("../models/post")
var striptags = require('striptags')
exports.createpost=(req,res)=>
{
	console.log(req.body);
	const data=req.body;
	const post=new Post(req.body);
	post.save((err,post)=>
	{
		if(err)
		{
			return res.status(400).json({
				err:"could not post"
			})
		}

		 res.json({
			post
		})
	})
}

exports.showpost=(req,res)=>
{
	Post.find((err,result)=>
	{
		if(err)
		{
			res.json(err); 
		}
		if (result) {
            res.json(result); 
        }
	})
}
exports.showpostbyid=(req,res)=>
{
	console.log(req.params)
	const id=req.params.id;
	Post.findById(id).exec((err,post)=>
	{
		if(err || !post)
		{
			return res.status(400).json({
				error:'post not found'
			})
		}
		 
		 res.json(post); 
		
	})
}

