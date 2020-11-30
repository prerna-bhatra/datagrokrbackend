const express=require("express");
const router=express.Router();
const {createreply,showreply,deletereply,updatereply}=require('../controllers/reply')
router.post('/createreply',createreply)
router.get('/deletereply/:replyid',deletereply)
router.post('/updatereply/:replyid',updatereply)
router.get('/showreply/:commentid',showreply)
//router.get('/showpostbyid/:id',showpostbyid)*/
module.exports = router;