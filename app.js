const express = require("express")
const app = express()
app.listen(3000, () => {
    console.log("message")
})

app.get("/", (req,res) => {
    res.send("message");
});

app.post("/", (req,res) => {
    req.send("message");
})  