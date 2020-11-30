 const mongoose=require("mongoose");

const commentSchema=new mongoose.Schema({
	userid:
	{
		type:Object,
		require:true
	},
	commentpost:
	{
		type:String,
		require:true
	},
	postid:
	{
		type:Object,
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

module.exports=mongoose.model('Comment',commentSchema);





