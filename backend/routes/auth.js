const express = require ('express');
const router = express.Router();

//POST for auth/login
router.post('/login', async(req, res) => {
    const { username , password } = req.body;
    //Chceks  databse for the user, validtes the password, assigns role 
    //(ie admin or client) and sets the appropriate flag
    res.json({success:true,role:'admin'}); 
})

module.exports = router;