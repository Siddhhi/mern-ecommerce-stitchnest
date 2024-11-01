import React, { useContext } from "react";
import Title from "../components/Title";
import Carttotal from "../components/Carttotal";
import { useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Placeorder = () => {
  const [method, setmethod] = useState("COD");
  const {
    navigate,
    token,
    cartItems,
    setcartItems,
    delivery_fee,
    total,
    products,
  } = useContext(ShopContext);
  const [formData, setformData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformData((data) => ({ ...data, [name]: value }));
  };
  const onSumbitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      console.log("Cart items:", cartItems);
      console.log("total:", total());

      const orderData = {
        address: formData,
        items: orderItems,
        amount: total() + delivery_fee,
      };
      switch (method) {
        // --------------------Api calls for COD-----------------
        case "COD":
          const response = await axios.post(
            "http://localhost:4000/api/order/place",
            orderData,
            { headers: { token } }
          );
          console.log(response.data.success);
          if (response.data.success) {
            setcartItems({});
            navigate("/order");
          } else {
            toast.error(response.data.message);
          }
          break;
        // --------------------Api calls for Stripe-----------------
        case "stripe":
          const responseStripe = await axios.post(
            "http://localhost:4000/api/order/stripe",
            orderData,
            { headers: { token } }
          );
          console.log(responseStripe.data.success);
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data;
            window.location.replace(session_url);
          } else {
            toast.error(responseStripe.data.message);
          }
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Order submission failed:", error);
      toast.error("An error occurred while placing the order.");
    }
  };

  return (
    <form
      onSubmit={onSumbitHandler}
      className="flex flex-col sm:flex-row gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t justify-between"
    >
      {/* --------------Left side----------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3  ">
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            className="border border-gray-400 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            className="border border-gray-400 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          className="border border-gray-400 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email address"
        />
        <input
          required
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3  ">
          <input
            required
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            className="border border-gray-400 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            required
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            className="border border-gray-400 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3  ">
          <input
            required
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            className="border border-gray-400 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Zipcode"
          />
          <input
            required
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            className="border border-gray-400 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          className="border border-gray-400 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone"
        />
      </div>
      {/* -------------Right side------------ */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <Carttotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYEMNT"} text2={"METHOD"} />
          {/* -----------PAYEMNT SELECTION------------- */}
          <div
            onClick={(e) => {
              e.stopPropagation();
              setmethod("stripe");
            }}
            className="flex gap-3 flex-col lg:flex-row "
          >
            <div className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.stripelogo} className="h-5 mx-4" alt="" />
            </div>

            <div
              onClick={(e) => {
                e.stopPropagation();
                setmethod("COD");
              }}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "COD" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 font-medium mx-4 text-sm   ">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
