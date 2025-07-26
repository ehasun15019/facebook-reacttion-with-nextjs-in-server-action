import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Button from "./ui/Button";
import { commentUp } from "@/actions/from-fillup-action";

const Card = () => {
  return (
    <div className="w-[800px] border border-[#1d2331] text-white flex justify-evenly items-center p-3 rounded">
      <Image src={assets.my_pic} alt="my_pic" className="w-[260px] h-auto" />

      <div className="from-section">
        <form action={commentUp}>
          <div className="pb-3">
            <input
              type="text"
              name="name"
              className="border border-[#1d2331] outline-0 ps-2 py-3 px-5"
              placeholder="Name"
            />
          </div>

          <div className="pb-3">
            <input
              type="email"
              name="email"
              className="border border-[#1d2331] outline-0 ps-2 py-3 px-5"
              placeholder="Email"
            />
          </div>

          <div className="pb-3">
            <textarea
              name="comment"
              className="border border-[#1d2331] outline-0 ps-2 py-3 px-5"
              placeholder="Add Comment"
            ></textarea>
          </div>
          <Button />
        </form>
      </div>
    </div>
  );
};

export default Card;
