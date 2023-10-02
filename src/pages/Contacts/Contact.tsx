import React from "react";
import a from "../../assets/images/users/user3.png";
import addArchive from "../../assets/images/icons/archiveadd.svg";
import profileUser from "../../assets/images/icons/profile2userBlack.svg";
import arrangeverticalsquare from "../../assets/images/icons/arrangeverticalsquare.svg";
import card from "../../assets/images/icons/whiteCard.svg";
import removeArchive from "../../assets/images/icons/archiveminus.svg";
export default function Contact() {
  return (
    <div className="flex justify-between pl-4 pr-4">
      <div className="flex items-center gap-3 ">
        <img src={a} className="w-[55px]" alt="" />
        <div>
          <h2 className="font-pmedium">Nick Murrow</h2>
          <p className="font-pmedium text-xs text-gray">Manager</p>
        </div>
      </div>
      <div className="flex gap-6">
        <img
          className="w-7 cursor-pointer hover:scale-110 duration-200"
          src={addArchive}
          alt=""
        />
        <img
          className="w-7 cursor-pointer hover:scale-110 duration-200"
          src={profileUser}
          alt=""
        />
        <img
          className="w-7 cursor-pointer hover:scale-110 duration-200"
          src={arrangeverticalsquare}
          alt=""
        />
        <img
          className="w-7 cursor-pointer hover:scale-110 duration-200"
          src={card}
          alt=""
        />
      </div>
    </div>
  );
}
