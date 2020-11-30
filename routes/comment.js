const express=require("express");
const router=express.Router();
const {createcomment,showcomment,deletecomment}=require('../controllers/comment')
router.post('/createcomment/:postid',createcomment)
router.get('/deletecomment/:commentid',deletecomment)
router.get('/showcomment/:postid',showcomment)
//router.get('/showpostbyid/:id',showpostbyid)*/
module.exports = router;