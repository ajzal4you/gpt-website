// import React from "react";

interface type {
  pexals1: String;
  obj: objType;
}

interface objType {
  lorem: String;
}

function Card({ pexals1, obj }: type) {
  return (
    <div
      className="card group flex justify-center items-end  hover:scale-y-125 relative ease-in-out  duration-700 sm:w-[340px] h-[100px] w-[100px] sm:h-[250px] hover:border-green rounded-2xl bg-center  hover:border-orange-200 border-white  border-4 my-5"
      style={{ background: `url(${pexals1})`, backgroundSize: `cover` }}
    >
      <div className=" hidden group-hover:flex justify-end items-end max-h-[80px] overflow-y-scroll scrollbar-hide py-4 my-4">
        <div className="face face2 group-hover:translate-y-1 py-1 sm:group-hover:translate-y-24 px-1 md:px-4 text-[5px] sm:text-[13px] sm:group-hover:text-[14px] duration-700  ">
          <p>{obj.lorem}</p>
          <a href="#" type="button">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
