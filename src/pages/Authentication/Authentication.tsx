import LoginForm from "./components/LoginForm";
import LoginNavbar from "../../components/Navbar/LoginNavbar";
import WelcomeSide from "./components/WelcomeSide";
import RegisterForm from "./components/RegisterForm";
import downArrow from "../../assets/images/icons/downArrow.svg";
import { useState } from "react";

export default function Authentication() {
  const [show, setShow] = useState(1);
  return (
    <div className="flex min-h-screen xls:flex-col">
      <LoginNavbar />
      <div className="w-5/12 xls:w-full xls:rounded-none xls:py-28 xls:min-h-screen bg-gradient-to-b xls:items-center from-mainPurple to-mainBlue m-h-full rounded-r-5xl flex flex-col justify-center px-20 md:px-5 overflow-hidden relative">
        <div className="w-full">
          <LoginForm show={show == 1 ? true : false} setShow={setShow} />
          <RegisterForm show={show == 2 ? true : false} setShow={setShow} />
        </div>
        <div className="hidden absolute bottom-4 bg-white h-12 aspect-square animate-fly rounded-full xls:flex justify-center items-center ">
          <img src={downArrow} className="h-7" alt="down-arrow" />
        </div>
      </div>
      <div className="w-7/12 xls:w-full">
        <WelcomeSide />
      </div>
    </div>
  );
}
