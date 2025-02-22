import Image from "next/image";
import bear from "@/public/svgs/bear.svg";
import lomi from "@/public/svgs/lomi.svg";
import gorjana from "@/public/svgs/gorjana.svg";
import hint from "@/public/svgs/hint.svg";
import venusEtFleur from "@/public/svgs/venusEtFleur.svg";
import obvi from "@/public/svgs/obvi.svg";
import star from "@/public/svgs/star.svg";
import lineChart from "@/public/svgs/lineChart.svg";
import grid from "@/public/svgs/grid.svg";
import testimonialCard from "@/public/svgs/testimonialCard.svg";
import shoutingMan from "@/public/svgs/shoutingMan.svg";
import product from "@/public/svgs/product.svg";
import client from "@/public/svgs/client.svg";
import left from "@/public/svgs/left.svg";
import right from "@/public/svgs/right.svg";

export default function Home() {
  return (
    <>
      {/* Container 1 */}
      <div className="bg-gradient-to-b from-[#CEFFB8] via-[#91F2CF] to-[#3CFFCE]">
        <div className=" h-auto md:h-[640px] flex flex-col items-center justify-center text-center space-y-6 py-12 px-4 sm:px-8 lg:px-24">
          <div className=" text-[16px] flex justify-center items-center">
            <Image src={star} alt="X" width={21.5} height={21.5} />
            <span className=" font-semibold ml-1">4.5</span>
            <span className=" text-gray-700 ml-1">(124 review)</span>
          </div>

          <h1 className=" font-extrabold text-4xl md:text-6xl">
            Data is the key to <br /> profitable growth
          </h1>

          <p className=" text-sm sm:text-lg md:text-xl font-medium">
            Proxima&apos;s predictive intelligence lowers acquisition <br />
            costs and increases customer LTV so you can scale your <br />{" "}
            business profitably.
          </p>

          <div className=" flex justify-center items-center gap-2 sm:gap-4">
            <button className=" w-[120px] sm:w-[140px] lg:w-[155px] h-[40px] sm:h-[44px] lg:h-[48px] text-[14px] sm:text-[16px] border border-black px-3 lg:px-6 py-1 lg:py-2 rounded-md hover:bg-black hover:text-white hover:transition hover:duration-300">
              Start free trial
            </button>
            <button className=" w-[120px] sm:w-[140px] lg:w-[155px] h-[40px] sm:h-[44px] lg:h-[48px] text-[14px] sm:text-[16px] border border-black px-3 lg:px-6 py-1 lg:py-2 rounded-md bg-black text-white hover:bg-transparent hover:text-black hover:transition hover:duration-300">
              Get a demo
            </button>
          </div>
        </div>

        {/* Brand Logos */}
        <div className=" h-[60px] md:h-[101px] bg-black flex gap-5 md:gap-7 lg:gap-28">
          {[bear, lomi, gorjana, hint, venusEtFleur, obvi].map(
            (logo, index) => (
              <Image
                key={index}
                src={logo}
                alt="Brand Logo"
                width={73.14}
                height={30}
                className=" w-auto max-w-[40px] sm:max-w-[60px] md:max-w-[80px] lg:max-w-[100px] h-auto"
              />
            )
          )}
        </div>
      </div>

      {/* Container 2 */}
      <div className=" bg-[#121212] px-4 sm:px-8 lg:px-24 pt-8 sm:py-8 lg:py-24 ">
        {/* Title: Eye popping results */}
        <div className=" flex justify-center">
          <div className=" w-full max-w-[754px]">
            <h2 className=" text-3xl md:text-5xl text-white text-center">
              Eye popping results
            </h2>
            <p className=" text-sm sm:text-lg md:text-xl text-[#84A5AA] text-center mt-3 md:mt-12">
              We&apos;ll help you acquire more customers--for less--and maximize
              marketing performance so you can scale profitably.
            </p>
          </div>
        </div>

        {/* Charts Section */}
        <div className=" flex items-center justify-center gap-12 py-6 md:py-20">
          <Image
            src={lineChart}
            alt="X"
            width={925}
            height={381}
            className=" w-[150px] md:w-[425px] lg:w-[925px]"
          />
          <div className=" space-y-4">
            <Image
              src={grid}
              alt="X"
              width={237}
              height={158}
              className=" w-[70px] md:w-[137px] lg:w-[237px]"
            />
            <Image
              src={grid}
              alt="X"
              width={237}
              height={158}
              className=" w-[70px] md:w-[137px] lg:w-[237px]"
            />
          </div>
        </div>

        {/* Testimonial Card */}
        <div className=" flex justify-center">
          <Image
            src={testimonialCard}
            alt="X"
            width={1240}
            height={258}
            className=" w-[270px] md:w-[1210px]"
          />
        </div>

        {/* AI Audiences Section */}
        <div className=" flex justify-center mt-24">
          <div className=" w-full max-w-[754px]">
            <h2 className=" text-3xl md:text-5xl text-white text-center">
              AI Audiences give you an edge in advertising
            </h2>
            <p className=" text-sm sm:text-lg md:text-xl text-[#84A5AA] text-center mt-3 md:mt-12">
              Maximize your ad performance with predictive audiences built from
              millions of commerce insights.
            </p>
          </div>
        </div>

        {/* Scale Ad Spend Section */}
        <div className=" flex flex-col justify-center lg:flex-row lg:justify-start my-16 lg:mt-36 px-4 sm:px-8 lg:px-60">
          <div className=" w-full max-w-[516px]">
            <h2 className=" text-xl sm:text-2xl md:text-3xl text-white text-start">
              Scale ad spend without <br /> efficiency loss
            </h2>
            <p className=" text-sm sm:text-lg md:text-xl text-[#84A5AA] text-start mt-2">
              Reach more customers who are ready to buy. Target audiences by
              tapping into a rich first-party data Outperform and out-scale
              campaigns that rely on in-platform targeting Improve CAC, ROAS,
              and AOV with powerful algorithms that constantly learn
            </p>
          </div>
        </div>

        <div className=" flex justify-between items-center gap-2 md:gap-20 md:mt-48 md:mb-28 px-4 sm:px-8 lg:px-60">
          <Image
            src={shoutingMan}
            alt="X"
            width={569}
            height={408}
            className=" w-[150px] md:w-[569px] h-auto md:h-[408px]"
          />
          <h2 className=" w-full text-lg sm:text-2xl md:text-3xl font-bold text-white text-start pl-14">
            Scale ad spend without <br /> efficiency loss
          </h2>
        </div>

        {/* Unlock profitable growth */}
        <div className=" flex justify-center mt-24 px-4 sm:px-8 lg:px-60">
          <div className=" w-full max-w-[803px]">
            <h2 className=" text-2xl md:text-5xl text-white text-center font-semibold">
              Unlock profitable growth with <br /> data intelligence
            </h2>
            <p className=" text-sm sm:text-lg md:text-xl text-[#84A5AA] text-center mt-4">
              Make better business decisions with industry-leading predictive
              intelligence.
            </p>
          </div>
        </div>

        {/* 3 Card: More data, sharper decisions */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 lg:py-24 px-4 sm:px-8 lg:px-60">
          <div>
            <p className=" text-base font-bold bg-[#FFE090] rounded-t-md p-3">
              More data, sharper decisions
            </p>
            <p className="  bg-[#FFFCF6] rounded-b-md p-3">
              Tap into our ever-growing universe of first- <br /> party data
              from 60M+ eCom shoppers across $10B+ in online sales to enhance ad
              targeting signals.
            </p>
          </div>
          <div>
            <p className=" text-base font-bold bg-[#CEF298] rounded-t-md p-3">
              Expand your reach
            </p>
            <p className="  bg-[#FFFCF6] rounded-b-md p-3">
              Tap into our ever-growing universe of first- <br /> party data
              from 60M+ eCom shoppers across <br /> $10B+ in online sales to
              enhance ad targeting signals.
            </p>
          </div>
          <div>
            <p className=" text-base font-bold bg-[#AADBE1] rounded-t-md p-3">
              Scale ads with confidence
            </p>
            <p className=" bg-[#FFFCF6] rounded-b-md p-3">
              Tap into our ever-growing universe of first- <br /> party data
              from 60M+ eCom shoppers across $10B+ in online sales to enhance ad
              targeting signals.
            </p>
          </div>
        </div>
      </div>

      {/* Container 3 */}
      <div className=" bg-gradient-to-b from-[#CEFFB8] via-[#91F2CF] to-[#3CFFCE] p-10 px-4 sm:px-8 lg:px-24">
        <div className=" flex justify-center">
          {/* Word on the street */}
          <div className=" w-full max-w-[992px] space-y-10">
            <h2 className=" text-3xl sm:text-4xl md:text-6xl text-black font-bold text-center">
              Word on the street
            </h2>

            {/* Testimonial Card */}
            <div className=" w-full flex flex-col lg:flex-row justify-center shadow-xl rounded-2xl">
              <div className=" bg-white rounded-t-2xl lg:rounded-l-2xl flex flex-col items-start justify-center p-7 lg:px-16 gap-3 lg:gap-5">
                <p className="text-base sm:text-lg md:text-xl font-medium">
                  “The Proxima team has unparalleled consumer data that has very
                  exciting applications post iOS 14.5. Not only is the data
                  enriching to any brand’s targeting options, the team is very
                  experienced and diligent in funneling paid media dollars to
                  our various goals. Proxima has a great product and their team
                  is super easy to work with!”
                </p>
                <div className=" flex items-center gap-3">
                  <Image
                    className=" rounded-full w-[30px] sm:w-[40px] lg:w-[50px]"
                    src={client}
                    alt="Client Image"
                    width={50}
                    height={50}
                  />
                  <div className=" flex flex-col">
                    <span className=" text-sm sm:text-base font-semibold">
                      Charlie Denby
                    </span>
                    <span className=" text-sm sm:text-base">
                      Director of Growth @ Canopy
                    </span>
                  </div>
                </div>
              </div>
              <Image
                className=" w-full lg:w-[332px] rounded-b-2xl lg:rounded-r-2xl"
                src={product}
                alt="Product Image"
                width={332.44}
                height={350}
              />
            </div>

            {/* Navigation Arrows */}
            <div className=" flex justify-center items-center gap-7">
              <Image
                className=" rounded-r-2xl cursor-pointer w-[30px] sm:w-[35px] md:w-[43px]"
                src={left}
                alt="Previous"
                width={43}
                height={43}
              />
              <Image
                className=" rounded-r-2xl cursor-pointer w-[30px] sm:w-[35px] md:w-[43px]"
                src={right}
                alt="Next"
                width={43}
                height={43}
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className=" flex justify-center py-10 sm:py-16 ">
          <div className=" w-full max-w-[900px] space-y-5">
            <h2 className=" text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-black text-center font-bold">
              Ready to get more out <br /> of your ad spend?
            </h2>
            <p className=" text-sm sm:text-lg md:text-xl text-black text-center">
              Reach new customers and unlock more efficient <br /> marketing
              spend with predictive intelligence.
            </p>

            <div className="flex justify-center items-center gap-3 sm:gap-4">
              <button className="w-auto px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base border border-black rounded-md hover:bg-black hover:text-white transition duration-300">
                Start free trial
              </button>
              <button className="w-auto px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base border border-black rounded-md bg-black text-white hover:bg-transparent hover:text-black transition duration-300">
                Get a demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
