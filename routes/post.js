const express=require("express");
const router=express.Router();

const {createpost,showpost,showpostbyid}=require('../controllers/post')
router.post('/createpost',createpost)
router.get('/showpost',showpost)
router.get('/showpostbyid/:id',showpostbyid)
module.exports = router ;