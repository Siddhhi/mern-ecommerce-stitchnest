import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { PiGreaterThanBold } from "react-icons/pi";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [Showfilter, setShowfilter] = useState(false);
  const [filterproduct, setfilterproduct] = useState([]);
  const [category, setcategory] = useState([]);
  const [subCategory, setsubCategory] = useState([]);
  const [sortType, setsortType] = useState("relavent");
  const togglecategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setcategory((prev) => [...prev, e.target.value]);
    }
  };
  const togglesubcategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setsubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setsubCategory((prev) => [...prev, e.target.value]);
    }
  };
  const applyfilter = () => {
    let productsCopy = products.slice();
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    setfilterproduct(productsCopy);
  };
  const sortproduct = () => {
    let fpcopy = filterproduct.slice();
    switch (sortType) {
      case "low-high":
        setfilterproduct(fpcopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setfilterproduct(fpcopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyfilter();
        break;
    }
  };
  useEffect(() => {
    sortproduct();
  }, [sortType]);

  useEffect(() => {
    applyfilter();
  }, [category, subCategory, search, showSearch, products]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/*---------------- Filter options----------- */}
      <div className="min-w-60">
        <p
          onClick={() => setShowfilter(!Showfilter)}
          className="my-2 text-xl  flex cursor-pointer items-center gap-2 "
        >
          FILTERS
          <PiGreaterThanBold
            className={`sm:hidden h-3 ${Showfilter ? "rotate-90" : ""}`}
          />
        </p>
        {/*----------------- Category filter------------ */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            Showfilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-5 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-500">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Women"}
                onChange={togglecategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kids"}
                onChange={togglecategory}
              />
              Kids
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Others"}
                onChange={togglecategory}
              />
              Others
            </p>
          </div>
        </div>
        {/*----------------- Subcategory---------------- */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            Showfilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-5 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-500">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Topwear"}
                onChange={togglesubcategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Accessories"}
                onChange={togglesubcategory}
              />
              Accessories
            </p>
          </div>
        </div>
      </div>
      {/* ------------RIGHT SIDE-------------- */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL "} text2={"COLLECTIONS"} />
          {/*------------------ PRODUCT SORT ---------------*/}
          <select
            onChange={(e) => setsortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relevant">Sort by Relevance</option>
            <option value="low-high">Sort by Low to High</option>
            <option value="high-low">Sort by High to Low</option>
          </select>
        </div>
        {/* MAP PRODUCTS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterproduct.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
