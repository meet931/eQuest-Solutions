'use client';
import Link from "next/link";
import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import logo from "@/public/svgs/logo.svg";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const links = [
    { label: "Product", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  return (
    <Wrapper>
      <div className="flex justify-between items-center py-6 z-10">
        <Image
          src={logo.src}
          alt="Halal Lab"
          width={121}
          height={34}
          className="cursor-pointer"
        />

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-black text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-7 lg:gap-12 pl-12 h-auto lg:h-[24px]">
          {links.map((link, index) => (
            <li
              key={index}
              className="text-sm lg:text-[18px] font-semibold hover:underline hover:duration-300 hover:transition"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden h-auto lg:h-[44px] md:flex gap-3">
          <button className="w-auto lg:w-[106px] text-sm lg:text-base border border-black px-3 lg:px-6 py-1 lg:py-2 rounded-md hover:bg-black hover:text-white transition duration-300">
            Login
          </button>
          <button className="w-auto lg:w-[159px] text-sm lg:text-base border border-black px-3 lg:px-6 py-1 lg:py-2 rounded-md bg-black text-white hover:bg-transparent hover:text-black transition duration-300">
            Sign Up
          </button>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-bold">Menu</span>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-2xl text-gray-600"
          >
            ×
          </button>
        </div>

        <ul className="p-4 space-y-4">
          {links.map((link, index) => (
            <li key={index} className="text-lg font-medium">
              <Link href={link.href} onClick={() => setIsSidebarOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Sidebar Buttons */}
        <div className="p-4 flex flex-col space-y-3">
          <button className="w-full text-sm border border-black px-6 py-2 rounded-md hover:bg-black hover:text-white transition duration-300">
            Login
          </button>
          <button className="w-full text-sm border border-black px-6 py-2 rounded-md bg-black text-white hover:bg-transparent hover:text-black transition duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
