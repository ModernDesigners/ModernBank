import React from "react";
import a from "../../assets/images/users/user3.png";
import addArchive from "../../assets/images/icons/archiveadd.svg";
import profileUser from "../../assets/images/icons/profile2userBlack.svg";
import arrangeverticalsquare from "../../assets/images/icons/arrangeverticalsquare.svg";
import card from "../../assets/images/icons/whiteCard.svg";
import removeArchive from "../../assets/images/icons/archiveminus.svg";
import { Ifriends } from "./Contacts";

export default function Contact({ id, name, img, status }: Ifriends) {
  const getStatus = (statusId: number) => {
    switch (statusId) {
      case 1:
        return "Friend";
      case 2:
        return "Favorite";
      case 3:
        return "Employee";
      default:
        return "Status_undefined";
    }
  };
  return (
    <div data-id={id} className="flex justify-between pl-4 pr-4">
      <div className="flex items-center gap-3 ">
        <img src={img} className="w-[55px]" alt="" />
        <div>
          <h2 className="font-pmedium">{name}</h2>
          <p className="font-pmedium text-xs text-gray">{getStatus(status)}</p>
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
