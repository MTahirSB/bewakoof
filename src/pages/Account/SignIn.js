import React, { useEffect, useRef, useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import {Loginimg} from "../../assets/images";
import { FaCaretDown, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Dropdown } from "flowbite-react";
import Flex from "../../components/designLayouts/Flex";
import { motion } from "framer-motion";
import { paginationItems } from "../../constants";
import { useSelector } from "react-redux";
import Image from "../../components/designLayouts/Image";

const SignIn = () => {
  // ============= Initial State Start here =============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  // ============= Error Msg End here ===================
  const [successMsg, setSuccessMsg] = useState("");
  // ============= Event Handler Start here =============
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  // ============= Event Handler End here ===============
  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Enter your email");
    }

    if (!password) {
      setErrPassword("Create a password");
    }
    // ============== Getting the value ==============
    if (email && password) {
      setSuccessMsg(
        `Hello dear, Thank you for your attempt. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
      );
      setEmail("");
      setPassword("");
    }
  };
  const [showMenu, setShowMenu] = useState(true);
  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  useEffect(() => {
    const filtered = paginationItems.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  const products = useSelector((state) => state.orebiReducer.products);
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const Navigate = useNavigate();
  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [show, ref]);

  return (
    <div className="flex-col w-full h-screen flex items-center justify-center">
      <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
        <div className="flex justify-between text-xs ">
          <div className="pl-16 ">
            <ul className="space-x-4">
              <a> offers </a>
              <a> Fanbook </a>
              <a> DownloadApp </a>
              <a> Tribe Membership </a>
            </ul>
          </div>
          <div className="pr-10">
            <ul className="space-x-4">
              <a> Contact Us </a>
              <a> Track Order </a>
            </ul>
          </div>
        </div>
        <nav className=" w-full h-full px-4 max-w-container mx-auto  relative">
          <Flex className="flex items-center h-full">
            <Link to="/">
              <div className="">
                <img
                  className="h-40 w-40"
                  alt="BEWAKOOF"
                  src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
                />
                {/* <h1 className="font-extrabold font-titleFont text-3xl bg-yellow-600">BEWAKOOF</h1> */}
              </div>
            </Link>
            <div>
              {showMenu && (
                <motion.ul
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex px-2 pt-4 w-auto z-50 p-0 gap-5"
                >
                  <>
                    <Dropdown
                      label=""
                      dismissOnClick={false}
                      renderTrigger={() => <span>Men</span>}
                    >
                      <Dropdown.Item onClick={() => alert("Dashboard!")}>
                        Dashboard
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => alert("Settings!")}>
                        Settings
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => alert("Earnings!")}>
                        Earnings
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => alert("Sign out!")}>
                        Sign out
                      </Dropdown.Item>
                    </Dropdown>
                    <Dropdown
                      label=""
                      dismissOnClick={false}
                      renderTrigger={() => <span>Women</span>}
                    >
                      <div className="flex">
                        <div className="flex-col">
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            TopWear
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                        </div>

                        <div>
                          <Dropdown.Item onClick={() => alert("Settings!")}>
                            BottomWear
                          </Dropdown.Item>

                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                        </div>
                        <div>
                          <Dropdown.Item onClick={() => alert("Settings!")}>
                            WinterWear
                          </Dropdown.Item>

                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => alert("Dashboard!")}>
                            Printed T-Shirts
                          </Dropdown.Item>
                        </div>
                      </div>
                      <div className="flex">
                        <Dropdown.Item onClick={() => alert("Sign out!")}>
                          Accessories
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => alert("Sign out!")}>
                          PlusSize
                        </Dropdown.Item>
                      </div>
                    </Dropdown>
                    <Dropdown
                      label=""
                      dismissOnClick={false}
                      renderTrigger={() => <span>Mobile Covers</span>}
                    >
                      <Dropdown.Item onClick={() => alert("Dashboard!")}>
                        Dashboard
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => alert("Settings!")}>
                        Settings
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => alert("Earnings!")}>
                        Earnings
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => alert("Sign out!")}>
                        Sign out
                      </Dropdown.Item>
                    </Dropdown>
                    {/* {navBarList.map(({ _id, title, link }) => (
                    // <NavLink
                    //   key={_id}
                    //   className="flex font-normal hover:font-bold w-full h-6 justify-center px-4 mt-2 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                    //   to={link}
                    //   state={{ data: location.pathname.split("/")[1] }}
                    // >
                    //   <li>{title}</li>
                    // </NavLink>
                  ))} */}
                  </>
                  <div className="relative w-full lg:w-[400px] h-[30px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 ml-72 mt-2  rounded-md">
                    <FaSearch className="w-5 h-5" />
                    <input
                      className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-xs pr-2 border-r-[1px] border-spacing-2 border-black"
                      type="text"
                      onChange={handleSearch}
                      value={searchQuery}
                      placeholder="Search by product category or collection"
                    />

                    {searchQuery && (
                      <div
                        className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
                      >
                        {searchQuery &&
                          filteredProducts.map((item) => (
                            <div
                              onClick={() =>
                                Navigate(
                                  `/product/${item.productName
                                    .toLowerCase()
                                    .split(" ")
                                    .join("")}`,
                                  {
                                    state: {
                                      item: item,
                                    },
                                  }
                                ) &
                                setShowSearchBar(true) &
                                setSearchQuery("")
                              }
                              key={item._id}
                              className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                            >
                              <img
                                className="w-24"
                                src={item.img}
                                alt="productImg"
                              />
                              <div className="flex flex-col gap-1">
                                <p className="font-semibold text-lg">
                                  {item.productName}
                                </p>
                                <p className="text-xs">{item.des}</p>
                                <p className="text-sm">
                                  Price:{" "}
                                  <span className="text-primeColor font-semibold">
                                    ${item.price}
                                  </span>
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-4 items-center lg:mt-2  pr-6 cursor-pointer relative">
                    <div
                      onClick={() => setShowUser(!showUser)}
                      className="flex"
                    >
                      Account
                      <FaCaretDown />
                    </div>
                    {showUser && (
                      <motion.ul
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-6 left-0 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
                      >
                        <Link to="/signin">
                          <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                            Login
                          </li>
                        </Link>
                        <Link onClick={() => setShowUser(false)} to="/signup">
                          <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                            Sign Up
                          </li>
                        </Link>
                        <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                          Profile
                        </li>
                        <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                          Others
                        </li>
                      </motion.ul>
                    )}
                    <Link to="/cart">
                      <div className="relative">
                        <FaShoppingCart />
                        <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                          {products.length > 0 ? products.length : 0}
                        </span>
                      </div>
                    </Link>
                  </div>
                </motion.ul>
              )}
            </div>
          </Flex>
        </nav>
      </div>
      <div className=" w-full flex flex-row">
        <div className=" w-1/2 hidden lgl:inline-flex h-full text-white ">
          <div className=" w-full bg-primeColor flex flex-col ">
            <div className="  w-full h-full bg-gradient-to-b from-white to-[#fff4c4] ">
              <div className=" pt-12 m-2 ">
                <h1 className=" font-titleFont text-3xl text-black font-bold pb-28">
                  Welcome to the world of Bewakoof®!
                </h1>

                <Image imgSrc={Loginimg} />
              </div>
            </div>
          </div>
        </div>
        <div className=" lgl:w-1/2 h-full">
          {successMsg ? (
            <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
              <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
                {successMsg}
              </p>
              <Link to="/signup">
                <button
                  className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-titleFont font-semibold 
            tracking-wide hover:bg-black hover:text-white duration-300"
                >
                  Sign Up
                </button>
              </Link>
            </div>
          ) : (
            <form className="w-full h-screen flex items-center justify-center">
              <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
                <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-5xlxl mb-4">
                  Sign in
                </h1>
                <div className="flex flex-col gap-3">
                  {/* Email */}
                  <div className="flex flex-col gap-3">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                      Work Email
                    </p>
                    <input
                      onChange={handleEmail}
                      value={email}
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      type="email"
                      placeholder="john@workemail.com"
                    />
                    {errEmail && (
                      <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errEmail}
                      </p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="flex flex-col gap-.5">
                    <p className="font-titleFont text-base font-semibold text-gray-600">
                      Password
                    </p>
                    <input
                      onChange={handlePassword}
                      value={password}
                      className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                      type="password"
                      placeholder="Create password"
                    />
                    {errPassword && (
                      <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                        <span className="font-bold italic mr-1">!</span>
                        {errPassword}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={handleSignUp}
                    className="bg-teal-500 hover:bg-teal-400 text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
                  >
                    Continue
                  </button>
                  <div className="flex gap-2 items-center justify-center">
                    <div className="h-[1px] w-1/2 bg-black opacity-50 -z-10"></div>
                    <h2 className="font-thin opacity-80">OR</h2>
                    <div className="h-[1px] w-1/2 bg-black opacity-50 -z-10"></div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h2 className="border-2 p-1 border-black rounded-md text-center justify-center">
                      CONTINUE WITH EMAIL
                    </h2>
                    <div className="w-full gap-2 flex">
                      <h2 className="border-2 py-1 px-4 border-black rounded-md text-center justify-center">GOOGLE</h2>
                      <h2 className="border-2 py-1 px-4 border-black rounded-md text-center justify-center">FACEBOOK</h2>
                    </div>
                  </div>
                  <p className="text-sm text-center font-titleFont font-medium">
                    Don't have an Account?{" "}
                    <Link to="/signup">
                      <span className="hover:text-blue-600 duration-300">
                        Sign up
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
