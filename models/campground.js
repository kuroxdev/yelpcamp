const mongoose =require('mongoose');
const Schema =mongoose.Schema;
const campgroundSchema=new Schema({
    title:{
        type:String
    },
    price:{
        type:String
    },
    description:{
        type:String
    },
    location:{
        type:String
    }
    

})
const CampGround= mongoose.model("CampGround",campgroundSchema)

module.exports=CampGround;