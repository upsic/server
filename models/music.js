const mongoose = require('mongoose')
const Schema = mongoose.Schema

const musicSchema = new Schema({
    title : String,
    artist : String,
    url : String,
    img_url : {
        type : String,
        default : `https://iweek.org.za/wp-content/uploads/2015/09/no-profile-photo1.jpg`
    },
    user : {
        type: Schema.Types.ObjectId,
        ref : `User`
    }
})

const Music = mongoose.model('Music', musicSchema)

module.exports = Music