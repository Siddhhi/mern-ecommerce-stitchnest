import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import connectdb from './config/mongodb.js';
import connectcloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productroute.js';
import cartRouter from './routes/cartroute.js';
import orderRouter from './routes/orderroute.js';

//App Config
const app =express();
const port = process.env.PORT || 4000
connectdb()
connectcloudinary()


//Middlewares
app.use(express.json())
app.use(cors())

//api end points
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.get('/',(req,res) => {
  res.send("API WORKING")
})
app.listen(port, () => {
  console.log("Server started on PORT : " + port)
})
