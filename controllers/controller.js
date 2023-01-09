let express = require('express');
let app = express();

app.use(express.urlencoded({
    extended : true
}));

 var mysql = require("mysql");
 var connection = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : '1234',
    database    : 'catalogue'
 });

 connection.connect(function(error,result){
    if(error) console.log(error);
    console.log(result);
 });

const user = require('../models/model');

User

exports.templateGet = function(req,res){
    res.render('home.ejs')

}

exports.templatePost = function(req,res){
    user0 = new user(req.body.firstname,req.body.name)
    
    console.log(user0);

    
}
