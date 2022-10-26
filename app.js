const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(__dirname + '/public'));

//console.log(app);

app.listen(process.env.PORT || 3031, ()=> console.log("Servidor corriendo"));

app.get("/", (req, res) =>{
    res.sendFile(path.resolve('./views/home.html'))
});

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/views/register.html");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
});

app.post('/login', (req, res)=>{
    res.redirect('/')
});


