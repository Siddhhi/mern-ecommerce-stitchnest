import express from 'express';
import {verifyStripe,allOrder,usersOrder,updatestatus,placeOrder,placeOrderStripe} from '../controllers/ordercontroller.js'
import adminAuth from '../middleware/adminAuth.js';
import authuser from '../middleware/auth.js';
const orderRouter=express.Router()
// --------------Admin feature-----------
orderRouter.post('/list',adminAuth,allOrder)
orderRouter.post('/status',adminAuth,updatestatus)
//--------------Payment feature------------
orderRouter.post('/place',authuser,placeOrder)
orderRouter.post('/stripe',authuser,placeOrderStripe)
// ----------------User feature-------
orderRouter.post('/userorders',authuser,usersOrder)
//---------------Verify payment---------
orderRouter.post('/verifyStripe',authuser,verifyStripe)

export default orderRouter;