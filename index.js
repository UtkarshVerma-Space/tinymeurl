require('dotenv').config()
const express = require("express")

const urlRoute = require("./routes/url")
const app = express()
app.use(express.urlencoded({extended:true}))
const {connectToMongoDB} = require("./connect")
app.use(express.json())
app.use("/", urlRoute)
app.set('view engine' ,'ejs')
// Set the 'public' folder as the static directory
app.use(express.static('public'));
connectToMongoDB(process.env.mongo_url,)
.then(()=> console.log("Mongodb connected"))

app.get("/a" ,(req,res)=>{
    res.redirect("http://google.com")
})

app.listen(process.env.PORT || 8000)