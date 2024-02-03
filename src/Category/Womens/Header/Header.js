import React, { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { logo, logoLight } from "../../../assets/images";
import { Dropdown } from "flowbite-react";
import { navBarList, paginationItems } from "../../../constants";
import Flex from "../../../components/designLayouts/Flex";
import { FaCaretDown, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const location = useLocation();
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
                  <div onClick={() => setShowUser(!showUser)} className="flex">
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

            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            />
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className="w-full h-full bg-primeColor p-6">
                    <img
                      className="w-28 mb-6"
                      src={logoLight}
                      alt="logoLight"
                    />
                    <ul className="text-gray-200 flex flex-col gap-2">
                      {navBarList.map((item) => (
                        <li
                          className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                          key={item._id}
                        >
                          <NavLink
                            to={item.link}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <h1
                        onClick={() => setCategory(!category)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        Shop by Category{" "}
                        <span className="text-lg">{category ? "-" : "+"}</span>
                      </h1>
                      {category && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSedenavLi">New Arrivals</li>
                          <li className="headerSedenavLi">Gadgets</li>
                          <li className="headerSedenavLi">Accessories</li>
                          <li className="headerSedenavLi">Electronics</li>
                          <li className="headerSedenavLi">Others</li>
                        </motion.ul>
                      )}
                    </div>
                    <div className="mt-4">
                      <h1
                        onClick={() => setBrand(!brand)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        Shop by Brand
                        <span className="text-lg">{brand ? "-" : "+"}</span>
                      </h1>
                      {brand && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSedenavLi">New Arrivals</li>
                          <li className="headerSedenavLi">Gudgets</li>
                          <li className="headerSedenavLi">Accessories</li>
                          <li className="headerSedenavLi">Electronics</li>
                          <li className="headerSedenavLi">Others</li>
                        </motion.ul>
                      )}
                    </div>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;
