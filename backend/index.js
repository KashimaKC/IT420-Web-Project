const express = require('express')
const app = express()

// res is used to send information to the frontend
// req is used to receive information from the frontend
app.get("/", (req,res) => {
    res.send("hello world"); // test msg
})

app.listen(3001, () =>  {
    console.log("Running on port 3001."); // test msg

})