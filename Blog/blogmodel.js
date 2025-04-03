const mongoose = require("mongoose")
const Schema = mongoose.Schema

const blogSchema = new Schema({
    course : {
        type : String
    },
    mentor :{
        type : String
    },
    language : {
        type : String
    },
    image : {
        type : String
    }
})

const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog