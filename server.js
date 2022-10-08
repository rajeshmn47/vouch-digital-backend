const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const User=require('./model')
const userscontroller = require('./controllers')
const {Namerr} = require('namerr');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
const url = 'http://localhost:3000'
app.use(cors({
  origin: '*'
}));
app.use('/user/',userscontroller)


const ATLAS_URI ='mongodb+srv://rajeshmn47:uni1ver%40se@cluster0.bpxam.mongodb.net/assignment?retryWrites=true&w=majority'

mongoose.Promise = global.Promise
mongoose.connect(
    ATLAS_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error) {
    if (error) {
      console.log('Error!' + error)
    }
  }
)
app.get("/",async(req,res)=>{
    res.send("API running success")
})

app.get("/pushcategories",async(req,res)=>{
    res.send("API running")
})
app.get('/createproduct',async(req,res)=>{
  res.send("API running")
})
app.get('/findout',async(req,res)=>{
    res.send("API running")
})
const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
      const firstName =Namerr.name()
      const email=firstName.split(' ').join('')+'@email.com'
      console.warn(`App listening on http://localhost:${PORT}`)
    })