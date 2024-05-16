import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import vector from "../assets/Vector.png";
import { FiPhone } from "react-icons/fi";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItem = [
    { link: "Home" },
    { link: "Listings" },
    { link: "Members" },
    { link: "Blog" },
    { link: "Pages" },
    { link: "Contact" },
  ];

  return (
    <header
      className={`${
        isSticky
          ? "sticky top-0 left-0 right-0 bg-[#2A282A] shadow-md rounded-bl-3xl rounded-br-3xl transition-ease-in-out duration-500"
          : ""
      } z-50 w-full fixed top-0 left-0 right-0 bg-transparent py-3`}
    >
      <nav className={`flex justify-between py-3 mx-5 items-center text-white`}>
        <div className="flex items-center gap-2">
          <img src={vector} alt="vector" className="h-8 w-6" />
          <h1 className="text-xl">JustHome</h1>
        </div>

        <div>
          <ul className="lg:flex gap-8 hidden md:hidden">
            {navItem.map(({ link }) => (
              <li key={link} className="cursor-pointer hover:text-red-300">
                <Link to={link.toLowerCase()} smooth={true} duration={200}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaXmark className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        <ul
          className={`space-y-4 mt-16 bg-[#2A282A] h-auto ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          } lg:hidden pb-6`}
        >
          {navItem.map(({ link }) => (
            <li
              key={link}
              className="cursor-pointer hover:text-red-300 px-10 my-5"
            >
              <Link
                to={link.toLowerCase()}
                smooth={true}
                duration={200}
                onClick={toggleMenu}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="lg:flex gap-3 items-center md:hidden hidden">
          <p className="flex items-center gap-2">
            <FiPhone /> <span> +68 685 88666</span>
          </p>
          <p className="border-1 p-1 rounded-full">
            <RiAccountCircleLine />
          </p>
          <button className="border-1 px-3 py-1 rounded-2xl">
            Add Property
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
