import user from "../../assets/images/users/userPorfile.png";
import arrow from "../../assets/images/icons/arrowright.svg";
import moon from "../../assets/images/icons/moon.svg";
import card from "../../assets/images/icons/card.svg";
import discount from "../../assets/images/icons/discountshape.svg";
import { LinksAPI } from "../../API/LinksAPI";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SettingsBar from "./SettingsBar";

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);
  const [activeLink, setActiveLink] = useState<null | string>(null);

  return (
    <>
      <nav
        className={`left-0 top-0 fixed h-full w-[285px] z-10 bg-mainWhite shadow p-5 flex flex-col justify-between duration-300  lg:justify-normal lg:items-center sm2:items-start lg:w-full lg:gap-7 lg:h-[100px] lg:overflow-hidden lg:bg-white lg:shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]  ${
          isNavbarOpen ? "lg:h-[600px]" : ""
        }`}
      >
        <div
          onClick={() => setIsNavbarOpen((state) => !state)}
          className=" h-9 aspect-square absolute top-8 right-5 items-center z-30 flex-col gap-[10px] hidden lg:flex"
        >
          <span
            className={`block w-full h-[2px] transition-transform duration-150 bg-mainBlack ${
              isNavbarOpen ? "translate-y-3 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block w-full h-[2px] transition-opacity duration-150 bg-mainBlack ${
              isNavbarOpen ? "opacity-0" : ""
            } `}
          ></span>
          <span
            className={`block w-full h-[2px] transition-transform duration-150 bg-mainBlack ${
              isNavbarOpen ? "-translate-y-3 -rotate-45" : ""
            }`}
          ></span>
        </div>
        <Link to={"/Profile"}>
          <div
            className=" bg-bg w-full h-[53px] flex items-center justify-between
        p-2 lg:w-[340px] lg:p-5 lg:justify-center max-w-full  rounded-md  sm2:w-[250px]  sm2:justify-normal
      "
          >
            <div className="flex items-center  gap-2">
              <img src={user} className="" alt="User" />
              <div className="">
                <p className="font-pmedium line-0 leading-3">JOHN KORTIS</p>
                <p className="font-pmedium text-[12px] text-paragraph">
                  CO OPERATOR
                </p>
              </div>
            </div>
            <div className="h-9 aspect-square bg-mainWhite rounded-md flex justify-center items-center cursor-pointer transition duration-150 hover:bg-subWhite2 lg:hidden">
              <img src={arrow} className="h-5 opacity-90" alt="arrowIcon" />
            </div>
          </div>
        </Link>

        <div className="flex flex-col gap-5 sm2:w-full ">
          {LinksAPI.map((e: any, i: number) => (
            <Link to={e.LinkTo} key={i}>
              <div
                key={i}
                className={`${
                  activeLink?.slice(1) === e.LinkTo ? "activeNav" : ""
                } flex items-center gap-2 cursor-pointer p-3 duration-200 hover:bg-bg  rounded-lg `}
              >
                {e.icon}
                <div className="bg-line w-[1px] h-[13px]"></div>
                <p className="font-pmedium">{e.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex gap-5 sm2:justify-center sm2:w-full">
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
      <SettingsBar />
    </>
  );
}
