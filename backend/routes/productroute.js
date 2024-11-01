import express from "express";
import { addproduct,removeproduct,listproduct,singleproduct } from "../controllers/productcontroller.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter= express.Router()

productRouter.post('/add', adminAuth, upload.fields([{ name: "image1", maxCount: 1 }, { name: "image2", maxCount: 1 }, { name: "image3", maxCount: 1 }, { name: "image4", maxCount: 1 }]), addproduct);

productRouter.post('/remove',adminAuth,removeproduct);
productRouter.get('/list',listproduct);
productRouter.post('/single',singleproduct);

export default productRouter;