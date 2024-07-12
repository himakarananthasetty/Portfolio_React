import React from "react";
import portfolioimg from "../assets/projects/portfolio.png";
import amaz from "../assets/projects/amazonclone.png";
import emp from "../assets/projects/employeereg.png";
import gamtrac from "../assets/projects/gametracker.png";
import hybridbook from "../assets/projects/hybridbook.png";
import airlinerec from "../assets/projects/AirlineRecommendationSystem.png";
import recordmanagementsys from "../assets/projects/RecordManagementSystem.png";

// import imagewo from '/Users/himakarananthasetty/portfolio_himakar_react/src/assets/projects/workImg.jpeg'

const Work = () => {
  return (
    <div name="work" className=" w-full md:h-screen text-gray-300 bg-[#162554]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-4">Check out the things I have built.</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item 1  a trvta 3 closing div*/}

          <div
            style={{ backgroundImage: `url(${portfolioimg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover */}
            <div className="text-2xl font-bold text-black text-center  opacity-0 group-hover:opacity-100">
              <span text-2xl font-bold text-while tracking-wider>
                My Portfolio App With React.js and TailWind CSS
              </span>
              <div className="pt-8 text-center">
                <a href="https://himakarananthasetty-portfolio.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {" "}
                    Demo
                  </button>
                </a>
                <a href="https://github.com/himakarananthasetty/Portfolio_React">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${amaz})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover */}
            <div className="text-2xl font-bold text-black text-center  opacity-0 group-hover:opacity-100">
              <span tracking-wider>
                Amazon Clone With Next.js and Tail Wind CSS
              </span>
              <div className="pt-8 text-center">
                <a href="https://amazon-clone-himakar.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {" "}
                    Demo
                  </button>
                </a>
                <a href="https://github.com/himakarananthasetty/AmazonClone">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${emp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover */}
            <div className="text-md font-bold text-black text-center  opacity-0 group-hover:opacity-100">
              <span tracking-wider>
                Employee Registration- CRUD application with React and
                Springboot
              </span>
              <span></span>
              <div className="pt-8 text-center">
                <a href="https://github.com/himakarananthasetty/Springboot-react-employee-frontend">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {" "}
                    Frontend code
                  </button>
                </a>
                <a href="https://github.com/himakarananthasetty/Springboot-react-employee-backend">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Backend code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${gamtrac})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover */}
            <div className="text-2xl font-bold text-black text-center  opacity-0 group-hover:opacity-100">
              <span tracking-wider>
                Game Tracker with Ejs Template, Maria DB Docker Container, Node
                Js and Express JS. (Private repository)
              </span>
              <div className="pt-8 text-center">
                {/* <a href="https://amazon-clone-himakar.vercel.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {" "}
                    Demo
                  </button>
                </a> */}
                <a href="https://github.com/himakarananthasetty/mie-dev-challenge">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* below three closing */}
          <div
            style={{ backgroundImage: `url(${hybridbook})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover */}
            <div className="text-2xl font-bold text-black text-center  opacity-0 group-hover:opacity-100">
              <span tracking-wider>
                Hybrid Book Recommendation Sytem with Sentimental Analysis
                (Machine Learing Embedded Project) Private
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/himakarananthasetty/HybridBookRecommendation-with-Sentimental-Analysis">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${airlinerec})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover */}
            <div className="text-2xl font-bold text-black text-center  opacity-0 group-hover:opacity-100">
              <span tracking-wider>
                Airline Recommendation System with Web Scraped Real Time Data
                (ML Embedded Project) Private
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/himakarananthasetty/AirlineRecommendationSystem">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${recordmanagementsys})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/*Hover */}
            <div className="text-2xl font-bold text-black text-center  opacity-0 group-hover:opacity-100">
              <span tracking-wider>
                RecordManangement System with React, Django hosted on Amazon Web Services (S3 bucket and Ec2)
              </span>
              <div className="pt-8 text-center">
              <div className="pt-8 text-center">
                <a href="http://recordmanagementsystem-react.s3-website.us-east-2.amazonaws.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    {" "}
                    Demo
                  </button>
                </a>
                <a href="https://github.com/himakarananthasetty/RecordManagementSystem_Django_React">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* below three closing */}
        </div>
      </div>
    </div>
  );
};

export default Work;
