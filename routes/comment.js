const express=require("express");
const router=express.Router();
const {createcomment,showcomment,deletecomment,updatecomment}=require('../controllers/comment')
router.post('/createcomment/:postid',createcomment)
router.get('/deletecomment/:commentid',deletecomment)
router.post('/updatecomment/:commentid',updatecomment)
router.get('/showcomment/:postid',showcomment)
//router.get('/showpostbyid/:id',showpostbyid)*/
module.exports = router;