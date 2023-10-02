import { useState } from "react";
import arrowup from "../../assets/images/icons/arrowup2.svg";
import Contact from "./Contact";

export default function Contacts() {
  const [activeMenus, setActiveMenus] = useState({
    Friends: true,
    Favorites: false,
    Employees: false,
  });
  return (
    <div className="container">
      <h1 className="font-pmedium text-2xl mb-4">Contacts</h1>
      <div
        className={`${activeMenus.Friends ? "" : "h-[60px]"} overflow-hidden`}
      >
        <div className="flex cursor-pointer justify-between bg-white bg-opacity-40 p-4 hover:bg-opacity-100 duration-200">
          <p className="font-kmedium text-lg">Friends</p>
          <img
            className={`${activeMenus.Friends ? "" : "rotate-180"}`}
            src={arrowup}
            alt=""
          />
        </div>
        <div className="bg-white p-3 flex flex-col gap-5">
          <Contact />
          <Contact />
          <Contact />
        </div>
      </div>
    </div>
  );
}
