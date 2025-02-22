import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, 'WEW']
    },

    email:{
        type: String,
        required: [true, 'WEW']
    },

    password:{
        type: String,
        required: [true, 'WEW']
    }
})

export default mongoose.model('User', userSchema);