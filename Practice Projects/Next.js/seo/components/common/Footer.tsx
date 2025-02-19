import React from "react";
import Wrapper from "./Wrapper";
import Image from "next/image";
import instagram from "@/public/svgs/instagram.svg";
import twitter from "@/public/svgs/twitter.svg";
import linkedIn from "@/public/svgs/linkedIn.svg";

function Footer() {
  return (
    <div className=" h-[363px] py-4 bg-black w-full text-white flex justify-center items-center">
      <Wrapper>
        <div className=" grid grid-cols-3">
          <div>
            <span className=" text-sm md:text-base mb-3 font-semibold">Product</span>
            <ul className=" mt-3 text-xs md:text-base space-y-1 text-[#E7E9E9] font-light">
              <li>Home</li>
              <li>AI Audiences</li>
              <li>
                Intelligence <span className=" uppercase font-medium text-[8px] md:text-[10px] text-[#5091F3] px-2 py-1 border border-1 border-[#5091F3] bg-[#5091F3] bg-opacity-30 rounded-[160px] ml-1 md:ml-2">beta</span>
              </li>
            </ul>
          </div>

          <div>
            <span className=" text-sm md:text-base mb-3 font-semibold">Resources</span>
            <ul className=" mt-3 text-xs md:text-base space-y-1 text-[#E7E9E9] font-light">
              <li>Case Studies</li>
              <li>Help Center</li>
              <li>Proxima Newsletter</li>
              <li>Blog</li>
              <li>Request a Demo</li>
            </ul>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-4 mt-12">
          <Image src={twitter.src} alt="X" width={28} height={28} className=" cursor-pointer" />
          <Image src={instagram.src} alt="Instagram" width={28} height={28} className=" cursor-pointer" />
          <Image src={linkedIn.src} alt="linkedIn" width={28} height={28} className=" cursor-pointer" />
        </div>
      </Wrapper>
    </div>
  );
}

export default Footer;
