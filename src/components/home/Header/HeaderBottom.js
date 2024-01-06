import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { paginationItems } from "../../../constants";



const HeaderBottom = () => {
  return (
    <div className=" flex w-full bg-white relative">
      <a href="" className="px-8 font-thin font-bold justify-center position: fixed; top: 78px;" >Sale </a>
      <a href="" className="px-8 font-thin font-bold justify-center position: fixed; top: 78px;" >WinterWear </a>
      <a href="" className="px-8 font-thin font-bold justify-center position: fixed; top: 78px;" >Men </a>
      <a href="" className="px-8 font-thin font-bold justify-center position: fixed; top: 78px;" >Women </a>
      <a href="" className="px-8 font-thin font-bold justify-center position: fixed; top: 78px;" >Accessories </a>
      <a href="" className="px-8 font-thin font-bold justify-center position: fixed; top: 78px;" >Heavy Duty </a>
      <a href="" className="px-8 font-thin font-bold justify-center position: fixed; top: 78px;" >Bewakoof Air </a>
      <a href="" className="px-8 font-thin font-bold justify-center position: fixed; top: 78px;" >Official Merch </a>
      <a href="" className="px-8 font-thin font-bold justify-center position: fixed; top: 78px;" >Plus Size </a>
      
    </div>
  );
  }

export default HeaderBottom;
