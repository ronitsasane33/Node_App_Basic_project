const hbs = require("hbs")
//Express setting
const express = require("express")
const app = express()
const port = process.env.PORT || 3000

//Path setting
const path = require("path")
const directoryPath = path.join(__dirname, "..")
const viewPath = path.join(__dirname,'../Templates/views')
app.use(express.static(directoryPath))
app.set("views", viewPath)

//View Engine setting
app.set('view engine', 'hbs')
const partialPath = path.join(__dirname,"../Templates/partials")
hbs.registerPartials(partialPath)

//API's
app.get('', (req,res)=>{
    res.render('index',{
        title: 'Home',
        name: 'shubham',
        age: 25
    })
})
   
app.get("/contact", (req,res)=>{
    res.render('contact',{
        name: 'sasa',
        title: 'contact us'
    })
    
})

app.get("/weather", (req,res)=>{
    if(!req.query.location){
        return res.send({
            error: 'please provide the appropriet location, the location is invalid and can"t acces the requered info'
        })
    }
    res.send({
        address: req.query.location
    })
})

app.get("/help", (req, res)=> {
    res.render('help',{
        title: 'Help',
        name: 'kk'
    })
})

app.listen(port, ()=>{
    console.log("connected to server "+ port)
})
