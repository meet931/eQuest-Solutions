"use client";
import React, { useEffect, useState } from "react";
import uparrow from "@/public/svgs/uparrow.svg";
import Image from "next/image";

function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  // Scroll to top
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-black text-sm px-2 py-2 md:px-4 md:py-4 border border-slate-600 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
        >
          <Image
            src={uparrow}
            alt="X"
            width={21.5}
            height={21.5}
            className="invert"
          />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
