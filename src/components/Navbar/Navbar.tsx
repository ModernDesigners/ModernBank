import user from "../../assets/images/users/userPorfile.png";
import arrow from "../../assets/images/icons/arrowright.svg";
import moon from "../../assets/images/icons/moon.svg";
import card from "../../assets/images/icons/card.svg";
import discount from "../../assets/images/icons/discountshape.svg";
import { AiOutlineClose, AiOutlineBars } from "react-icons/ai";
import { LinksAPI } from "../../API/LinksAPI";
import { useState } from "react";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  return (
    <nav
      className={`left-0 top-0 fixed h-full w-[285px] z-10 bg-mainWhite shadow p-5 flex flex-col justify-between duration-300  lg:justify-normal lg:items-center lg:w-full lg:gap-7 lg:h-[100px] lg:overflow-hidden lg:bg-white lg:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ${
        isNavbarOpen ? "lg:h-[600px]" : ""
      }`}
    >
      {isNavbarOpen ? (
        <AiOutlineClose
          className="hidden absolute right-[25px] top-[25px] text-[35px] cursor-pointer lg:block"
          onClick={() => setIsNavbarOpen((current) => !current)}
        />
      ) : (
        <AiOutlineBars
          className="hidden absolute right-[25px] top-[25px] text-[35px] cursor-pointer lg:block"
          onClick={() => setIsNavbarOpen((current) => !current)}
        />
      )}
      <div
        className="bg-bg w-full h-[53px] flex items-center justify-between
        p-2 lg:w-[340px] lg:p-5 lg:justify-center max-w-full
      "
      >
        <div className="flex items-center  gap-2 ">
          <img src={user} className="" alt="User" />
          <div className="">
            <p className="font-pmedium line-0 leading-3">JOHN KORTIS</p>
            <p className="font-pmedium text-[12px] text-gray opacity-60">
              CO OPERATOR
            </p>
          </div>
        </div>
        <div>
          <img src={arrow} className="cursor-pointer lg:hidden" alt="" />
        </div>
      </div>

      <div className="flex flex-col gap-5 ">
        {LinksAPI.map((e: any, i: number) => (
          <div
            key={i}
            className="flex items-center gap-2 cursor-pointer p-3 duration-200 hover:bg-bg "
          >
            <img className="w-[25px]" src={e.icon} alt={e.title} />
            <div className="bg-line w-[1px] h-[13px]"></div>
            <p className="font-pmedium">{e.title}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-5">
        <div className="bg-bg p-2 cursor-pointer">
          <img src={moon} alt="" />
        </div>
        <div className="bg-bg p-2 cursor-pointer">
          <img src={card} alt="" />
        </div>
        <div className="bg-bg p-2 cursor-pointer">
          <img src={discount} alt="" />
        </div>
      </div>
    </nav>
  );
}
