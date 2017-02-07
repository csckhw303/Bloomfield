import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import compression from 'compression';
const port = 3000;
const app = express();

app.use(compression());
//production only server static file in dist folder
app.use(express.static('dist'));

//handle this way
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
})

app.get("/users", function(req, res) {
    res.json([
       {id: 1, "firstName":"Bob", "lastName":"Smith", "email":"bob@mamil.com" },
       {id: 1, "firstName":"Bob2", "lastName":"Smith2", "email":"bob2@mamil.com" },
       {id: 1, "firstName":"Bob3", "lastName":"Smith3", "email":"bob3@mamil.com" }
    ]);
});

//go listen the port
app.listen(port, function(err){
    if(err){
        console.log(err);
    } else {
        open("http://localhost:" + port);
    }
})