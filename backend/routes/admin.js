const express = require('express');
const router = express.Router();

//POST admin adding items
router.post('/add-item', (req,res) => {
    const {id,img,brand,price,name,screenSize,spu,ram,storage} = req.body;
    //Adds new laptop to the database
    res.json({success: true});
});

//DELETE admin deleting a laptop item
router.delete('/delete-item',(req,res) => {
    const{id} = req.body;
    //Deltes item from the database
    res.json({sucess: true});
});

//POST admin adding discounts
router.post('/add-discount',(req,res) => {
    const{laptopID, discount} = req.body;
    //Applies discount to laptops
    res.json({success: true});
});

module.exports = router;