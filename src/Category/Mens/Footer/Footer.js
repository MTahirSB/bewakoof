import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";
import { paymentCard } from "../../../assets/images";
import Image from "../../../components/designLayouts/Image";

const Footer = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("Please provide an Email !");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Please give a valid Email!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };
  return (
    <div className="w-full bg-[#3c3c3a] py-8">
      <div className="w-full flex-col mx-auto grid grid-cols-1 md:grid-cols-4  xl:grid-cols-6 px-4 gap-20">
        <div className="col-span-6">
          <div className="text-yellow-300">
            <FooterListTitle title="Bewakoof" />
          </div>
          <div className="flex text-yellow-300 gap-20">
            <div>
              <FooterListTitle title="Your account" />
              <ul className="flex flex-col ">
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Profile
                </li>
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Orders
                </li>
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Addresses
                </li>
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Account Details
                </li>
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Payment Options
                </li>
              </ul>
            </div>
            <div>
              <FooterListTitle title="Your account" />
              <ul className="flex flex-col ">
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Profile
                </li>
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Orders
                </li>
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Addresses
                </li>
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Account Details
                </li>
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Payment Options
                </li>
              </ul>
            </div>
            <div>
              <FooterListTitle title="Your account" />
              <ul className="flex flex-col ">
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Profile
                </li>
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Orders
                </li>
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Addresses
                </li>
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Account Details
                </li>
                <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                  Payment Options
                </li>
              </ul>
            </div>

            <div className=" text-yellow-300">
              <FooterListTitle title="CONNECT WITH US" />
              <div className="flex flex-col gap-6">
                <a
                  href="https://www.facebook.com/Noorlalu143/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex ">
                    <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                      <FaFacebook />
                    </li>{" "}
                    <p className="pt-2 text-xs">4.7M people Like This</p>
                  </div>{" "}
                </a>

                <a
                  href="https://www.youtube.com/@reactjsBD"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <div className="flex ">
                    <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                      <FaYoutube />
                    </li>
                    <p className="pt-2 text-xs">1M followers</p>
                  </div>
                </a>
                <ul className="flex items-center gap-2">
                  <a
                    href="https://github.com/noorjsdivs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                      <FaGithub />
                    </li>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                      <FaLinkedin />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="flex-row">
            <FooterListTitle title="Keep Up to Date" />
           
         {subscription ? (
                <motion.p
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full text-center text-base font-titleFont font-semibold text-green-600"
                >
                  Subscribed Successfully !
                </motion.p>
              ) : (
                <div className=" flex-col xl:flex-row flex  ">
                 
                    <input
                      onChange={(e) => setEmailInfo(e.target.value)}
                      value={emailInfo}
                      className="border-b-4 border-b-yellow-300"
                      type="text"
                      placeholder="Insert your email ...*"
                    />
                    {errMsg && (
                      <p className="text-red-600 text-sm font-semibold font-titleFont text-center animate-bounce mt-2">
                        {errMsg}
                      </p>
                    )}
                 
                  <button
                    onClick={handleSubscription}
                    className="bg-yellow-300 px-4 pb-3 pt-2 text-black"
                  >
                    Subscribe
                  </button>
                </div>
              )}
          </div>

          </div>
          <div>
          <div></div>
          <div className="col-span-2 flex flex-col items-startw-full ">
            <div className="flex gap-10 text-sm pt-4 text-yellow-300">
             <div className="flex-col text-white"><p>15 Day Returns</p><p>COD</p></div>
              <FooterListTitle title="Download App" />
            <div><FooterListTitle title="100% Secure Payment"/>
            <Image
                className={`w-[300px] h-[70px] ${
                  subscription ? "mt-2" : "mt-6"
                }`}
                imgSrc={paymentCard}
              />
              </div>
            </div>
            <div className="w-full">
              <p className="text-center mb-4">
               --------------------------------------------------------------
              </p>
              

             
            </div>
          </div>
        </div>
          
        </div>
       
      </div>
    </div>
  );
};

export default Footer;
