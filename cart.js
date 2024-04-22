const express = require("express");
const path = require ("path");
const fs = require("fs");
const app = express();
const bodyParser = require('body-parser');
const port = 500;
const mongoose = require('mongoose');

app.use(bodyParser.json());


app.use(express.static('public', {index: false}));
app.get('/',(req,res)=>{
 res.sendFile(__dirname + '/public/index.html');


})
app.use(express.urlencoded({extended: true}));




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
    // id: Number,
    // image: String,
    title: String,
    price: Number
    
});

const CartModel = mongoose.model('DataList',cartSchema);








app.listen(port,()=>{
    console.log(`the application started succesfully on port ${port}`);
});
