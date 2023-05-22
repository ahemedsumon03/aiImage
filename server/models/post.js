import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    prompt: {
        type: String,
        required:true
    },
    photo: {
        type: String,
        require:true
    }
})

const postmodel = mongoose.model('post', postSchema);
export default postmodel;