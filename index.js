var a=40;
var s=45;
console.log(a+s);
// const fs= require('fs');
const express= require('express');
const app= express();

app.get("",(req,resp) =>{
    resp.send('<h1> hello friends</h1><a href="/about" >About page</a>');
}
);
app.get("/about",(req,resp) =>{
    resp.send('<h1>Is is our about page</h1><a href="/" >Home page</a>');
}
);

app.listen(5000);