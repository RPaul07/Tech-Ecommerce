const express = require('express');
const router = express.Router();

//POST client adding to cart
router.post('/add-to-cart',(req,res) => {
    const{userID, laptopID} = req.body;
    //Add to the users cart in the database
    res.json({success: true});
});

//POST client removing fom cart
router.post('/remove-from-cart', (req,res) => {
    const{userID, laptopID} = req.body;
    //Removes item from teh cart
    res.json({success: true});
});

//GET client searching
router.get('.search', (req,res) => {
    const {query} = req.body;
    //Performs search and return teh results
    res.json({success:true,results:[] });
});

//POST client buying
router.post('/buy',(req,res) => {
    const {userID, cartItems} = req.body;
    //Process purchase
    res.json({success: true});
});

module.exports = router;
