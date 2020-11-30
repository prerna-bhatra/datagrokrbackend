 const mongoose=require("mongoose");

const replySchema=new mongoose.Schema({
	userid:
	{
		type:Object,
		require:true
	},
	
	commentid:
	{
		type:Object,
		require:true	
	},
	replypost:
	{
		type:String,
		require:true
	},
	nameuser:
	{
		type:String,
		require:true
	}
},
{
	timestamps:true
}
);

module.exports=mongoose.model('Reply',replySchema);





