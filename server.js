import express from "express"
import sum from "./sum.js"
const app = express()
const port = 8080;

app.listen(port, (req, res) =>{
    console.log("server is working on port " + port);
})


app.get("/home", async(req, res) =>{


    res.json({"message" : "from root dir_"});

})

app.get("/getSum/:a/:b", async(req, res) =>{

    const{a,b} = req.params;
    res.json({
        ans : sum(parseInt(a),parseInt(b))
    })

})