//Aplication Object
var express = require('express')
var app = express()

app.locals.title="rakib"   //local variable in 'locals' object

app.post('/', (req, res) => {
    res.send('This is home page with post request');
});

app.get('/', function (req, res) {
    res.send('hello world')
})

app.listen(3000,()=>{
    console.log("runn succesfull");
})