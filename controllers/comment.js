var mongoose = require('mongoose');
const Comment=require("../models/comment")
var striptags = require('striptags')
exports.createcomment=(req,res)=>
{
	console.log(req.body);
	const data=req.body;
	const comment=new Comment(req.body);
	comment.save((err,post)=>
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

exports.showcomment=(req,res)=>
{
	const postid=req.params.postid;
	console.log(postid)
	Comment.find({postid:postid}, 
   	(err, response)=>
   	{
   		if(err)
   		{
   			
   		}
   		res.json({
			response
		})
      
	});

}


exports.deletecomment=(req,res)=>
{

	const  id = mongoose.Types.ObjectId(req.params.commentid); 
	console.log(id)
	console.log(typeof(id))
	Comment.deleteOne({_id:id})
	.exec()	
	.then((data,err)=>
	{
		if(err)
		{
			return res.status(400).json({
				error:'Not Deleted'
			});

		}
		
		res.json({data:data})
	})

}

exports.updatecomment=(req,res)=>
{

	const  id = mongoose.Types.ObjectId(req.params.commentid); 
	console.log(id)
	console.log(typeof(id))
	const updatedComment=req.body.commentpost;
	 Comment.findByIdAndUpdate(id, { commentpost: updatedComment },
                            function (err, docs) { 
    if (err){ 
        console.log(err) 
    } 
    else{ 
        console.log("Order Deliverd : ", docs); 
    } 
}); 
}
