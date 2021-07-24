const express =require('express')
const mongoose=require('mongoose')
const app=express();
const path = require('path')
const campground=require('./models/campground')

mongoose.connect('mongodb://localhost:27017/yelpcamp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('we are connected to db')
}).catch((err)=>{
    console.log('db connection problem '+err)
})


app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))



//application part

//home route
app.get('/',(req,res)=>{
    res.render('home')
})

//db test
app.get('/new',async (req,res)=>{
    const mycamp = new campground({
        title:'test',
    description:'test',
    location:'test',
    price:'4545'
    }) 
    await mycamp.save();
    res.send(mycamp)

})



app.listen(3000,()=>{
    console.log('listening on port 3000')
})