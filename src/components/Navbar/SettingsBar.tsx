import { useState } from "react";
import NotificationsIcon from "../../assets/images/icons/notification.svg";
import SettingsIcon from "../../assets/images/icons/setting.svg";
import userIcon from "../../assets/images/icons/user.svg";
import logoutIcon from "../../assets/images/icons/logout.svg";
import { Link } from "react-router-dom";
import Notifications from "../../API/Notifications";
import NotificationBlock from "./components/NotificationBlock";

export interface NotificationsI {
  status: number;
  text: string;
}
export default function SettingsBar() {
  const NotificationsAPI: NotificationsI[] = Notifications;
  const [bar, setBar] = useState(0);
  const toggleBar = (id: number) => {
    if (bar == id) setBar(0);
    else setBar(id);
  };
  return (
    <div className="fixed shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-15px] top-5 right-5 w-[122px] h-[45px] bg-white rounded-md flex items-center justify-center lg:hidden">
      <div className="w-full h-full ">
        <button
          onClick={() => toggleBar(1)}
          className={`w-full h-full transition duration-150 flex justify-center items-center  rounded-l-md ${
            bar == 1 ? "bg-subWhite3" : "hover:bg-subWhite2"
          }`}
        >
          <img src={NotificationsIcon} alt="NotificationsIcon" />
        </button>
        <div
          className={`shadow-getShadow h-[300px] w-[250px] absolute bg-white right-0 top-14 rounded-2xl transition-all duration-150 ${
            bar == 1 ? "visible opacity-100" : " opacity-0 invisible"
          }`}
        >
          <h3 className=" font-pmedium tracking-wider text-mainBlack text-center py-2">
            Notifications
          </h3>
          <div className=" h-[2px] w-10 rounded-lg bg-line mx-auto mb-2"></div>
          <div className="h-[205px] flex flex-col overflow-y-auto">
            {NotificationsAPI.map((item: NotificationsI, i: number) => (
              <NotificationBlock
                key={i}
                status={item.status}
                text={item.text}
              />
            ))}
          </div>
          <div className="h-[45px] w-full absolute bottom-0 flex items-center justify-center font-pmedium tracking-wider border-t-2 border-line cursor-pointer  hover:bg-subWhite2 transition-colors duration-100">
            {" "}
            See all
          </div>
        </div>
      </div>
      <div className="h-[28px] w-[2px] min-w-[2px] bg-subWhite2"></div>
      <div className="w-full h-full ">
        <button
          onClick={() => toggleBar(2)}
          className={`w-full h-full transition duration-150 flex justify-center items-center  rounded-r-md ${
            bar == 2 ? "bg-subWhite3" : "hover:bg-subWhite2"
          }`}
        >
          <img src={SettingsIcon} alt="SettingsIcon" />
        </button>
        <div
          className={` overflow-hidden shadow-getShadow h-auto w-[200px] absolute bg-white right-0 top-14 rounded-2xl transition-all duration-150 ${
            bar == 2 ? "visible opacity-100" : " opacity-0 invisible"
          }`}
        >
          <Link to={"/Profile"}>
            <button
              className="flex h-[55px] px-5 items-center w-full transition-colors duration-100 hover:bg-subWhite2"
              onClick={() => setBar(0)}
            >
              <img src={userIcon} alt="userIcon" className="h-[21px]" />
              <p className=" ml-4 font-pmedium tracking-wider text-md text-mainBlack">
                Profile
              </p>
            </button>
          </Link>
          <div className="h-[1px] w-full bg-line"></div>
          <button
            className="flex h-[55px] px-5 items-center w-full transition-colors duration-100 hover:bg-subWhite2"
            onClick={() => setBar(0)}
          >
            <img src={logoutIcon} alt="userIcon" className="h-[21px]" />
            <p className=" ml-4 font-pmedium tracking-wider text-md text-mainBlack">
              Log out
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
