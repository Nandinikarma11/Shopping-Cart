const express = require("express");
const path = require ("path");
const fs = require("fs");
const app = express();
const bodyParser = require('body-parser');
const port = 5000;
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));


app.use(express.static('public', {index: false}));
app.get('/',(req,res)=>{
 res.sendFile(__dirname + '/public/index.html');


})

app.post('/save-cart', (req, res) => {
    const cartItems = req.body;
    CartModel.insertMany(cartItems)
        .then(() => {
            res.status(200).send('Cart saved successfully!');
        })
        .catch((error) => {
            res.status(500).send('Error saving cart to database:', error);
        });
});





//Connect to mongodb
mongoose.connect('mongodb://localhost:27017/Cart',{
    


})
.then(()=>{
    console.log('Connected to mongoDB');
})
.catch(()=>{
    console.error('Error connecting to mongoDB:',error);
});

const Schema = mongoose.Schema;
const cartSchema = new Schema({
    
    title: String,
    price: Number
    
});

const CartModel = mongoose.model('DataList',cartSchema);







app.listen(port,()=>{
    console.log(`the application started succesfully on port ${port}`);
});
