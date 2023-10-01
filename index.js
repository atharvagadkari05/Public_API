import express from 'express'
import MongoConnection from './config/db.js'
import cors from 'cors'
import AuthRouters from './routes/auth.js'
const app = express();

MongoConnection();


const PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json());

app.use('/api/v1/auth', AuthRouters)
// app.use('/api/v1/', posts)
// app.use('/api/v1/', features)
app.listen(PORT, ()=>{
    console.log(`Listening at ${PORT}`)
})