/**
 * Created by koen on 8-12-14.
 */

var express = require('express');

var app = express();

//configure app
//user middleware

//define routes
app.get('/', function (req, res){
    res.send('This is a basic router in nodejs :)');
});


app.listen(1337, function (){
    console.log('Ready on port 1337');

});
