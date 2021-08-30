const mongoose = require("mongoose")
const Schema = mongoose.Schema

const TopSchema = new Schema({
     
    value:{
        type:Number
    },
    percentage:{
        type:Number
    }
    

})
const FeedSchema = new Schema({
     
    imgurl:{
        type:String
    },
    content:{
        type:String
    }
    

})
const DataSchema = new Schema({
     Top:[TopSchema],
    Revenue:[{
        type:Number
    }],
    feed:[FeedSchema]
})


const Data = mongoose.model("Data",DataSchema)
module.exports = Data