import mongoose from "mongoose"

export const connectDb = (url) => { 

    mongoose.set('strictQuery', true);
    mongoose.connect(url).then(() => { 
        console.log('MongoDb is connected')
    }).then((error) => { 
        console.log(error)
    })
}