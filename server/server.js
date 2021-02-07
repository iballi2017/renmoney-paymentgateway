var express = require('express');
var app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
var app_path = '../dist/ng11-template';


app.use('/', express.static(path.join(__dirname, app_path)))
app.get('*', (req,res)=>    res.sendFile(path.join(__dirname, app_path + '/index.html')))
app.listen(PORT, ()=>console.log(`Listening to port ${PORT}`));