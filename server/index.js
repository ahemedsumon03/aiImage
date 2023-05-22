import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDb } from './mongodb/connectdatabase.js'
import postRoute from './routes/postRoute.js'
import dallyRoute from './routes/dallyRoute.js';

dotenv.config();
const app = express()

app.use(cors())
app.use(express.json({ limit: '50mb' }));

app.use('/post/api', postRoute);
app.use('/dally/api',dallyRoute);

const startServer = async () => {
    try {
        
        connectDb(process.env.MONGODB_URL)
        app.listen(8080, () => {
            console.log('server started port of 8080')
        })

    } catch (error) {
        console.log(error)
    }
    
}

startServer();
