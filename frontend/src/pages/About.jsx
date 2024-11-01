import React from "react";
import Title from "../components/Title";
import Newsletter from "../components/Newsletter";
import { assets } from "../assets/assets";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.aboutimg}
          className="w-full md:max-w-[450px] "
          alt=""
        />
        <div className="flex flex-col  gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to StitchNest, your go-to destination for beautifully
            crafted crochet products that combine functionality with artistic
            flair. At StitchNest, we believe that every piece we create tells a
            story, blending traditional craftsmanship with contemporary design
            to bring warmth and style into your everyday life.
          </p>
          <p>
            Our curated collection features an array of unique products,
            including stunning keychains that add a pop of color to your keys or
            bags, stylish crochet tops that are perfect for any season, and
            versatile bags that seamlessly transition from casual outings to
            chic events. Each item is meticulously handcrafted by skilled
            artisans, ensuring that you receive a product that is not only
            aesthetically pleasing but also built to last. We take pride in
            sourcing high-quality materials, selecting yarns that are soft,
            durable, and environmentally friendly. Our designs cater to a
            variety of tastes, whether you prefer vibrant colors, intricate
            patterns, or minimalist aesthetics.
            <p>
              StitchNest is more than just a brand; it's a celebration of
              creativity and individuality, allowing you to express your unique
              style through our handcrafted creations. Join our community of
              crochet enthusiasts and discover the joy of owning a piece from
              StitchNest.
            </p>
            Whether you’re shopping for yourself or searching for the perfect
            gift, our collection has something special for everyone. Explore our
            products today and embrace the charm of handmade crochet!
          </p>
          <b className="text-gray-800 ">Our Mission</b>
          <p>
            At StitchNest, our mission is to preserve and celebrate the art of
            crochet by crafting high-quality, sustainable, and stylish pieces.
            We aim to bring warmth, comfort, and timeless design into every
            home, while empowering artisans and fostering a deep appreciation
            for handcrafted traditions in modern living.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance :</b>
          <p className="text-gray-600">
            Crafted with Care – Our Commitment to Quality Assurance.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience :</b>
          <p className="text-gray-600">
            Enjoy Convenient Access to Unique Crochet Creations!
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service :</b>
          <p className="text-gray-600">Dedicated Support, Just for You!</p>
        </div>
      </div>
      <Newsletter />
    </div>
  );
};

export default About;
