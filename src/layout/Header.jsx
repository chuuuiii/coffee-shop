import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/common/Button";

export default function Header() {
  return (
    <div className="font-poppins min-h-screen flex flex-col">
      <header className="flex items-center justify-between border-b p-6 shadow-md">
        <div className="ml-10">LOGO</div>
        <div className="flex space-x-4 ml-10">
          <NavLink to="/menu">MENU</NavLink>
          <NavLink to="/rewards">REWARDS</NavLink>
          <NavLink to="/gift-cards">GIFT CARDS</NavLink>
        </div>
        <div className="ml-auto mr-10 space-x-4">
          <Button type="signin">Sign in</Button>
          <Button type="registration">Join now</Button>
        </div>
      </header>
    </div>
  );
}
