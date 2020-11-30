 const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
	userid:
	{
		type:Object,
		require:true
	},
	value:
	{
		type:String,
		require:true
	},
	username:
	{
		type:String
	}
},
{
	timestamps:true
}
);



module.exports=mongoose.model('Post',postSchema);





