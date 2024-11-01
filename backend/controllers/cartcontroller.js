import userModel from "../models/userModel.js"
//
// add products to user cart
const addtocart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = userData.cartData;
    if(cartData[itemId]){
      if(cartData[itemId][size]){
          cartData[itemId][size] += 1
      }
      else{
        cartData[itemId][size] = 1
      }
    } else{
      cartData[itemId]={}
      cartData[itemId][size]=1
    }
    const response =await userModel.findByIdAndUpdate(userId,{cartData})
    
    res.json({success:true,message:'Added to Cart'})

  } catch (error) {
    console.log(error)
    res.json({success:false,message:error.message})
  }
}
//update cart
const updatecart = async (req,res)=>{
 try {
  const {userId,itemId,size,quantity }= req.body
  if(!userId || !itemId || !size || !quantity){
    return res.status(400).json({ success: false, message: "All fields are required" });
  }
  const userData = await userModel.findById(userId)
  let cartData = await userData.cartData;
  cartData[itemId][size]=quantity
  await userModel.findByIdAndUpdate(userId,{cartData})
  res.json({success:true,message:'Cart Updated'})

 } catch (error) {
  console.log(error)
    res.json({success:false,message:error.message})
 }
}
//getcartdata
const getusercart = async (req,res)=>{
 try {
  const { userId} = req.body
  const userData = await userModel.findById(userId)
  let cartData = await userData.cartData;
  res.json({success:true,cartData})
 } catch (error) {
  console.log(error)
  res.json({success:false,message:error.message})
 }
}

export {addtocart,updatecart,getusercart};