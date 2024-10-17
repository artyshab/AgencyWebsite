import { Link } from "react-router-dom";
import logo from "../../assets/logo/Berlin-colored.svg";
import Button from "../button/Button";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [btn, setBtn] = useState(true);

  const changeBtn = () => {
    setBtn(!btn);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (window.scrollY > 100) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        id="navbar"
        className="bg-[#F5F7F8] fixed top-0 left-0 right-0 shadow-lg transition-all duration-500"
      >
        <div className="navbar-wrapper w-[90%] m-auto flex justify-between items-center py-3">
          <div className="logo">
            <Link to={"/"}>
              <img
                src={logo}
                alt="Berlin_Logo"
                className="lg:w-52 md:w-36 w-20"
              />
            </Link>
          </div>
          <div className="links hidden lg:flex">
            <ul className="flex gap-5 font-bold text-lg">
              <li className="hover:border-b-2 border-yellow-300 ">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:border-b-2 border-yellow-300 ">
                <Link to="/services">Services</Link>
              </li>
              <li className="hover:border-b-2 border-yellow-300 ">
                <Link to="/pricing">Pricing</Link>
              </li>
              <li className="hover:border-b-2 border-yellow-300 ">
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </div>

          <div className="buttons hidden lg:flex gap-5">
            <Button title="Log in" style="font-bold text-lg" />
            <Button
              title="Sign in"
              style="bg-[#FCDE70] py-2 px-5 rounded-xl font-bold text-lg"
            />
          </div>
          <div className="open-close-btn lg:hidden" onClick={changeBtn}>
            {btn ? (
              <Bars3Icon className="h-8 w-8 text-gray-700 cursor-pointer lg:hidden" />
            ) : (
              <XMarkIcon className="h-8 w-8 text-gray-700 cursor-pointer lg:hidden" />
            )}
          </div>

          {btn ? (
            ""
          ) : (
            <div
               id="nav-show"
              className="absolute top-14 left-0 right-0 md:top-[70px] lg:hidden bg-white w-[90%] m-auto rounded-lg flex justify-center z-10 border-solid border-2 shadow-lg"
            >
              <ul className="w-full flex-col text-center">
                <li className="border-solid border-b-2 py-5">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="border-solid border-b-2 py-5">
                  <Link to={"/services"}>Services</Link>
                </li>
                <li className="border-solid border-b-2 py-5">
                  <Link to={"/pricing"}>Pricing</Link>
                </li>
                <li className="border-solid border-b-2 py-5">
                  <Link to={"/about"}>About Us</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
