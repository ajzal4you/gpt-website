import  { useState } from "react";
// import img1 from "./assets/1.jpg";
// import bg from "./assets/bg.jpg";
import imgg1 from "./assets/home.png";
import img2 from "./assets/cam.png";
import img3 from "./assets/pencil.png";
import img4 from "./assets/inc.png";
import img5 from "./assets/video.png";
import img6 from "./assets/music.png";
import img7 from "./assets/sound.png";
import img8 from "./assets/fire.png";
import pexals1 from "./assets/pexel1.jpg";
// import bgimg1 from "./assets/1.jpg";
import bgimg2 from "./assets/2.jpg";
// import bgimg3 from "./assets/3.jpg";
// import bgimg4 from "./assets/bgimg3.jpg";

import { AiOutlineSearch } from "react-icons/ai";
import Card from "./Card";

export default function Body() {
  const [datas] = useState([
    {
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora officia iusto, quidem ea culpa error quam perferendis reprehenderit repellendus itaque rem laborum labore dolore cupiditate esse deserunt ipsum temporibus?",
    },
    {
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora officia iusto, quidem ea culpa error quam perferendis reprehenderit repellendus itaque rem laborum labore dolore cupiditate esse deserunt ipsum temporibus?",
    },
    {
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora officia iusto, quidem ea culpa error quam perferendis reprehenderit repellendus itaque rem laborum labore dolore cupiditate esse deserunt ipsum temporibus?",
    },
    {
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora officia iusto, quidem ea culpa error quam perferendis reprehenderit repellendus itaque rem laborum labore dolore cupiditate esse deserunt ipsum temporibus?",
    },
    {
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora officia iusto, quidem ea culpa error quam perferendis reprehenderit repellendus itaque rem laborum labore dolore cupiditate esse deserunt ipsum temporibus?",
    },
    {
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora officia iusto, quidem ea culpa error quam perferendis reprehenderit repellendus itaque rem laborum labore dolore cupiditate esse deserunt ipsum temporibus?",
    },
    {
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora officia iusto, quidem ea culpa error quam perferendis reprehenderit repellendus itaque rem laborum labore dolore cupiditate esse deserunt ipsum temporibus?",
    },
    {
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora officia iusto, quidem ea culpa error quam perferendis reprehenderit repellendus itaque rem laborum labore dolore cupiditate esse deserunt ipsum temporibus?",
    },
    {
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora officia iusto, quidem ea culpa error quam perferendis reprehenderit repellendus itaque rem laborum labore dolore cupiditate esse deserunt ipsum temporibus?",
    },
    {
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora officia iusto, quidem ea culpa error quam perferendis reprehenderit repellendus itaque rem laborum labore dolore cupiditate esse deserunt ipsum temporibus?",
    },
    {
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora officia iusto, quidem ea culpa error quam perferendis reprehenderit repellendus itaque rem laborum labore dolore cupiditate esse deserunt ipsum temporibus?",
    },
    {
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora officia iusto, quidem ea culpa error quam perferendis reprehenderit repellendus itaque rem laborum labore dolore cupiditate esse deserunt ipsum temporibus?",
    },
    {
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora officia iusto, quidem ea culpa error quam perferendis reprehenderit repellendus itaque rem laborum labore dolore cupiditate esse deserunt ipsum temporibus?",
    },
    {
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora officia iusto, quidem ea culpa error quam perferendis reprehenderit repellendus itaque rem laborum labore dolore cupiditate esse deserunt ipsum temporibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsum maiores, aliquam nam incidunt natus illum, soluta error a modi est provident totam nisi rem? Id alias magni ipsum officia.",
    },
    {
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora officia iusto, quidem ea culpa error quam perferendis reprehenderit repellendus itaque rem laborum labore dolore cupiditate esse deserunt ipsum temporibus?",
    },
    {
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora officia iusto, quidem ea culpa error quam perferendis reprehenderit repellendus itaque rem laborum labore dolore cupiditate esse deserunt ipsum temporibus?",
    },
    {
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora officia iusto, quidem ea culpa error quam perferendis reprehenderit repellendus itaque rem laborum labore dolore cupiditate esse deserunt ipsum temporibus?",
    },
    {
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora officia iusto, quidem ea culpa error quam perferendis reprehenderit repellendus itaque rem laborum labore dolore cupiditate esse deserunt ipsum temporibus?",
    },
    {
      lorem:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, tempora officia iusto, quidem ea culpa error quam perferendis reprehenderit repellendus itaque rem laborum labore dolore cupiditate esse deserunt ipsum temporibus?",
    },
  ]);
  return (
    <div>
      {/* {body} */}

      <div
        className=" text-orange-500 "
        style={{ background: `url($) `, backgroundSize: "cover" }}
      >
        <div className=" sm:max-w-[1680px] lg:mx-auto  sm:mx-10">
          <div className="hidden sm:flex justify-center flex-col items-center py-2 sm:flex-row sm:justify-between  capitalize  text-[15px] ">
            <h1 className="font-bold text-[20px] font-Nosifer ">GPTAI</h1>
            <ul className="flex flex-col sm:flex-row justify-center items-center space-x-2 font-bold">
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold"
                id=""
                aria-expanded="true"
                aria-haspopup="true"
              >
                Explore
                <svg
                  className="-mr-1 h-5 w-5 text-orange-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <li className="  hover:underline hover:bg-black rounded-full w-full px-2 py1">
                Log in
              </li>
              <button className="py-2 px-3  backdrop-blur-sm border-[1px] hover:bg-orange-400 hover:text-black rounded-full">
                Join
              </button>
              <button className="py-2 bg-white hover:bg-orange-400 hover:text-white  px-3 rounded-full">
                BLOG
              </button>
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-center sm:max-w-[1880px] lg:mx-auto justify-center  font-font2">
          <div className="md:w-[1250px]  md:my-28 my-5  md:mx-auto w-[400px] px-10   ">
            <h1 className="text-[20px] font-font8  tracking-wider md:text-[60px] font-bold">
              The next GPTAI gen is here... explore
            </h1>
            <p className="text-[11px] font-font1 tracking-tighter py-3 md:text-[17px] ">
              over 4.2 million + high quality stock images , videos and music
              shared by our talented commmunity
            </p>
            <div className="flex justify-center items-center  backdrop-blur-md  rounded-full mt-5 md:py-2">
              <AiOutlineSearch size={30} className="text-orange-400 ml-2" />
              <input
                className="rounded-full w-full text-[8px] md:text-[15px] placeholder:text-orange-400 md:w-[700px] px-3 py-2 mx-2"
                type="text"
                placeholder="Searc for all Ai in GPTAI "
              />
              <button
                type="button"
                className="inline-flex text-[12px] md:text-[16px]  w-full justify-end pr-3 gap-x-1 rounded-md text-orange-400  py-2 text-sm font-semibold"
                id=""
                aria-expanded="true"
                aria-haspopup="true"
              >
                Explore
                <svg
                  className="-mr-1 h-5 w-5 text-orange-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between px-5 text-orange-400 py-5 sm:max-w-[1480px] lg:mx-auto items-center">
          <p className="text-[10px]">
            Read more about the{" "}
            <span className="text-white">content licence</span>
          </p>
          <p className="text-[10px] text-orange-400">
            Free image by <span className="text-white">debannja</span>
          </p>
        </div>
      </div>

      {/* {sections} */}

      <div className="sm:max-w-[1880px] lg:mx-auto mb-20">
        <div className="flex items-center sm:justify-center justify-start mt-3 shadow-md py-5   overflow-x-scroll scrollbar-hide ">
          <div className="flex shadow-orange-400 py-1  justify-center items-center rounded-3xl gap-2 px-4 mx-2 py1 shadow-sm hover:grayscale-0 grayscale  hover:scale-125 hover:text-orange-400 text-[10px] md:text-[15px] ease-in-out duration-300 hover:bg-gray-50">
            <img className="w-3 h-3" src={imgg1} alt="" />
            Home
          </div>
          <div className="flex shadow-orange-400 py-1  justify-center items-center rounded-3xl gap-2 px-4 mx-2 py1 shadow-sm hover:grayscale-0 hover:scale-125 hover:text-orange-400 text-[10px] md:text-[15px] grayscale ease-in-out duration-300  hover:bg-gray-50">
            <img className="w-3 h-3" src={img2} alt="" />
            character
          </div>
          <div className="flex shadow-orange-400 py-1  justify-center items-center rounded-3xl gap-2 px-4 mx-2 py1 shadow-sm  hover:grayscale-0 hover:scale-125 hover:text-orange-400 text-[10px] md:text-[15px] grayscale ease-in-out duration-300 hover:bg-gray-50">
            <img className="w-3 h-3" src={img3} alt="" />
            Illustrations
          </div>
          <div className="flex shadow-orange-400 py-1  justify-center items-center rounded-3xl gap-2 px-4 mx-2 py1 shadow-sm  hover:grayscale-0 hover:scale-125 hover:text-orange-400 text-[10px] md:text-[15px] grayscale ease-in-out duration-300 hover:bg-gray-50">
            <img className="w-3 h-3" src={img4} alt="" />
            Creative
          </div>
          <div className="flex shadow-orange-400 py-1  justify-center items-center rounded-3xl gap-2 px-4 mx-2 py1 shadow-sm  hover:grayscale-0 hover:scale-125 hover:text-orange-400 text-[10px] md:text-[15px] grayscale ease-in-out duration-300 hover:bg-gray-50">
            <img className="w-3 h-3" src={img5} alt="" />
            Gaming
          </div>
          <div className="flex shadow-orange-400 py-1  justify-center items-center rounded-3xl gap-2 px-4 mx-2 py1 shadow-sm  hover:grayscale-0 hover:scale-125 hover:text-orange-400 text-[10px] md:text-[15px] grayscale ease-in-out duration-300 hover:bg-gray-50">
            <img className="w-3 h-3" src={img6} alt="" />
            Business
          </div>
          <div className="flex shadow-orange-400 py-1  justify-center items-center rounded-3xl gap-2 px-4 mx-2 py1 shadow-sm  hover:grayscale-0 hover:scale-125 hover:text-orange-400 text-[10px] md:text-[15px] grayscale ease-in-out duration-300 hover:bg-gray-50">
            <img className="w-3 h-3" src={img7} alt="" />
            Marketing
          </div>
          <div className="flex shadow-orange-400 py-1  justify-center items-center rounded-3xl gap-2 px-4 mx-2 py1 shadow-sm  hover:grayscale-0 hover:scale-125 hover:text-orange-400 text-[10px] md:text-[15px] grayscale ease-in-out duration-300 hover:bg-gray-50">
            <img className="w-3 h-3" src={img8} alt="" />
            GIFs
          </div>
        </div>
        <div className="flex justify-evenly sm:justify-center   items-center my-5 mx-[5%] flex-wrap ">
          <div className="flex items-start  overflow-x-scroll scrollbar-hide py-4">
            <h3 className="shadow-sm text-[12px] md:text-[18px] shadow-orange-400 rounded-full backdrop-blur-sm px-3 py-1 w-[120px] text-center  hover:scale-110 ease-in-out duration-300 hover:bg-orange-500 hover:text-white mx-2">
              nature
            </h3>
            <h3 className="shadow-sm text-[12px] md:text-[18px] shadow-orange-400 rounded-full backdrop-blur-sm px-3 py-1 w-[120px] text-center  hover:scale-110 ease-in-out duration-300 hover:bg-orange-500 hover:text-white mx-2">
              Wallpapper
            </h3>
            <h3 className="shadow-sm text-[12px] md:text-[18px] shadow-orange-400 rounded-full backdrop-blur-sm px-3 py-1 w-[120px] text-center  hover:scale-110 ease-in-out duration-300 hover:bg-orange-500 hover:text-white mx-2">
              background
            </h3>
            <h3 className="shadow-sm text-[12px] md:text-[18px] shadow-orange-400 rounded-full backdrop-blur-sm px-3 py-1 w-[120px] text-center  hover:scale-110 ease-in-out duration-300 hover:bg-orange-500 hover:text-white mx-2">
              sky
            </h3>
            <h3 className="shadow-sm text-[12px] md:text-[18px] shadow-orange-400 rounded-full backdrop-blur-sm px-3 py-1 w-[120px] text-center  hover:scale-110 ease-in-out duration-300 hover:bg-orange-500 hover:text-white mx-2">
              cat
            </h3>
            <h3 className="shadow-sm text-[12px] md:text-[18px] shadow-orange-400 rounded-full backdrop-blur-sm px-3 py-1 w-[120px] text-center  hover:scale-110 ease-in-out duration-300 hover:bg-orange-500 hover:text-white mx-2">
              food
            </h3>
            <h3 className="shadow-sm text-[12px] md:text-[18px] shadow-orange-400 rounded-full backdrop-blur-sm px-3 py-1 w-[120px] text-center  hover:scale-110 ease-in-out duration-300 hover:bg-orange-500 hover:text-white mx-2">
              fall
            </h3>
            <h3 className="shadow-sm text-[12px] md:text-[18px] shadow-orange-400 rounded-full backdrop-blur-sm px-3 py-1 w-[120px] text-center  hover:scale-110 ease-in-out duration-300 hover:bg-orange-500 hover:text-white mx-2">
              space
            </h3>
            <h3 className="shadow-sm text-[12px] md:text-[18px] shadow-orange-400 rounded-full backdrop-blur-sm px-3 py-1 w-[120px] text-center  hover:scale-110 ease-in-out duration-300 hover:bg-orange-500 hover:text-white mx-2">
              autumn
            </h3>
            <h3 className="shadow-sm text-[12px] md:text-[18px] shadow-orange-400 rounded-full backdrop-blur-sm px-3 py-1 w-[120px] text-center  hover:scale-110 ease-in-out duration-300 hover:bg-orange-500 hover:text-white mx-2">
              flower
            </h3>
            <h3 className="shadow-sm text-[12px] md:text-[18px] shadow-orange-400 rounded-full backdrop-blur-sm px-3 py-1 w-[120px] text-center  hover:scale-110 ease-in-out duration-300 hover:bg-orange-500 hover:text-white mx-2">
              flowers
            </h3>
            <h3 className="shadow-sm text-[12px] md:text-[18px] shadow-orange-400 rounded-full backdrop-blur-sm px-3 py-1 w-[120px] text-center  hover:scale-110 ease-in-out duration-300 hover:bg-orange-500 hover:text-white mx-2">
              forest
            </h3>
            <h3 className="shadow-sm text-[12px] md:text-[18px] shadow-orange-400 rounded-full backdrop-blur-sm px-3 py-1 w-[120px] text-center  hover:scale-110 ease-in-out duration-300 hover:bg-orange-500 hover:text-white mx-2">
              wallpapper
            </h3>
          </div>
          <div>
            <button
              type="button"
              className="inline-flex items-center text-[11px] md:text-[17px]  w-full justify-end pr-3 gap-x-1 border-2 px-3 rounded-full text-slate-100 py-2 my-4 text-center hover:text-black hover:scale-110 ease-in-out duration-300 hover:bg-slate-100 font-semibold"
              id=""
              aria-expanded="true"
              aria-haspopup="true"
            >
              Editor's choice
              <svg
                className="-mr-1 h-5 w-5 text-slate-100 hover:text-black"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap  justify-center items-center gap-2 my-10 px-[35px]  ">
          <div
            className="card w-[340px] h-[250px] z-10 rounded-2xl flex justify-center items-center flex-col hover:border-orange-200 border-white hover:scale-125 ease-in-out duration-700 border-4 my-5"
            style={{ background: `url(${bgimg2})` }}
          >
            <h1 className="text-white text-center font-font4">
              Its a test of data
            </h1>
            <button className="py-2 bg-orange-400 text-white my-5 px-3 rounded-2xl">
              Click Me
            </button>
            <div className="flex justify-center items-end text-white font-font6">
              #1234
            </div>
          </div>

          {datas.map((obj) => (
            <Card key={obj.lorem} pexals1={pexals1} obj={obj} />
          ))}
        </div>
      </div>

      {/* {sections} */}

      {/* {body end} */}
    </div>
  );
}
