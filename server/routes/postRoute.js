import express from 'express'
import { v2 as cloudinary } from 'cloudinary'
import Post from '../models/post.js';
import dotenv from 'dotenv'

dotenv.config();
const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
})

// post data

router.route('/').post(async (req, res) => { 
    try {
        
        const { name, prompt, photo } = req.body;
        const imageUrl = await cloudinary.uploader.upload(photo);
        const posts = await Post.create({
            name,
            prompt,
            photo: imageUrl.url
        })

        res.status(200).json({ success: true, data: posts });
        

    } catch (error) {
        res.json({success:false,message:error?.response?.data?.error?.message})
        console.log(error)
    }
})

// get data

router.route('/').get(async (req, res) => { 
    try {

        const posts = await Post.find({});
        res.status(200).json({ success: true, data: posts });
        
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false,message: error?.response?.data?.error?.message})
    }
})

export default router;