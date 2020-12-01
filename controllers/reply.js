var mongoose = require('mongoose');
const Reply=require("../models/reply")
var striptags = require('striptags')
exports.createreply=(req,res)=>
{
	console.log(req.body);
	const data=req.body;
	const reply=new Reply(req.body);
	reply.save((err,post)=>
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

exports.showreply=(req,res)=>
{
	const commentid= req.params.commentid;
	console.log(commentid,typeof(commentid))
	Reply.find({commentid:commentid}, 
   	(err, data)=>
   	{
   		if(err)
   		{
   			
   		}
   		res.json({
			data
		})
      
	});

}


exports.deletereply=(req,res)=>
{

	const  id = mongoose.Types.ObjectId(req.params.replyid); 
	console.log(id)
	console.log(typeof(id))
	Reply.deleteOne({_id:id})
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

exports.updatereply=(req,res)=>
{

	const  id = mongoose.Types.ObjectId(req.params.replyid); 
	console.log(id)
	console.log(typeof(id))
	const updatedreply=req.body.replypost;
	 Reply.findByIdAndUpdate(id, { replypost: updatedreply },
                            function (err, docs) { 
    if (err){ 
        console.log(err) 
    } 
    else{ 
        console.log("Order Deliverd : ", docs); 
    } 
}); 
}
