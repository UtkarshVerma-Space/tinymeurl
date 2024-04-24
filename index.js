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
connectToMongoDB('mongodb+srv://shavitriverma111:6qAn8ZfzQFIA7Zov@cluster0.b96tkzj.mongodb.net/mylinks?retryWrites=true&w=majority&appName=Cluster0',)
.then(()=> console.log("Mongodb connected"))

app.get("/a" ,(req,res)=>{
    res.redirect("http://google.com")
})

app.listen(3000,()=>console.log("Server Started at PORT : 3000"))