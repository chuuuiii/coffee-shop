import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Button from "../components/common/Button";
import Footer from "./Footer";
import LogIn from "../login/LogIn";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
      if (window.innerWidth >= 768) {
        setMenuOpen(false); 
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, []);

  const handleShowLogin = () => {
    setShowLoginForm((prev) => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen font-poppins">
      {!showLoginForm && (
        <div>
          <header className="flex items-center justify-between border-b p-6 shadow-sm">
            <div className={`ml-10 ${menuOpen ? "hidden" : "" }`}>LOGO</div>

            {/* Desktop Navigation Links */}
            <div
              className={`hidden md:flex space-x-4 ml-10 text-lg font-semibold ${
                isMobile ? "hidden" : ""
              }`}
            >
              <NavLink to="/menu">MENU</NavLink>
              <NavLink to="/rewards">REWARDS</NavLink>
              <NavLink to="/gift-cards">GIFT CARDS</NavLink>
            </div>

   
            <button
              className={`md:hidden btn btn-circle swap swap-rotate ${
                menuOpen ? "absolute top-4 right-4" : ""
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <input
                type="checkbox"
                checked={menuOpen}
                onChange={() => setMenuOpen(!menuOpen)}
              />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </button>

            {/* Sign In and Join Now Buttons */}
            {!isMobile && (
              <div className="ml-auto mr-10 space-x-4">
                <Button
                  type="signin"
                  onClick={() => handleShowLogin(!showLoginForm)}
                >
                  Sign in
                </Button>
                <Button type="registration">Join now</Button>
              </div>
            )}

            {/* Mobile Menu */}
            {menuOpen && isMobile && (
              <div className="flex flex-col justify-center items-center w-full space-y-2 p-2">
                <NavLink onClick={() => setMenuOpen(false)} to="/menu">
                  MENU
                </NavLink>
                <NavLink onClick={() => setMenuOpen(false)} to="/rewards">
                  REWARDS
                </NavLink>
                <NavLink onClick={() => setMenuOpen(false)} to="/gift-cards">
                  GIFT CARDS
                </NavLink>
              </div>
            )}
          </header>
        </div>
      )}
      <main className="flex-1">
        {showLoginForm ? <LogIn /> : <Outlet />}
        </main>
      {!showLoginForm && <Footer />}
    </div>
  );
}
