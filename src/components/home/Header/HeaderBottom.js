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
    <div className=" flex w-full bg-white relative px-8 font-thin font-bold justify-center position: fixed; top: 78px;">
      <Link to="/Men" className="">Men</Link>
     <Link to="/Sale" >Sale </Link>
     <Link to="/WinterWear" >WinterWear </Link>
     <Link to="/Women" >Women </Link>
     <Link to="/Accesories" >Accesories </Link>
     <Link to="/HeavyDuty" >Heavy Duty </Link>
     <Link to="/BewakoofAir" >Bewakoof Air </Link>
     <Link to="/OfficialMerch" >Official Merch </Link>
     <Link to="/PlusSize" >Plus Size </Link>
      
    </div>
  );
  }

export default HeaderBottom;
