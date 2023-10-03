import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm(props: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [checkBox, setCheckBox] = useState(false);
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const boxChange = () => {
    setCheckBox((state) => !state);
  };

  return (
    <div
      className={`flex flex-col gap-5 opacity-100 mobile:!opacity-100 transition-opacity duration-300 ${
        props.show ? "visible" : " !opacity-0 absolute -left-full"
      }`}
    >
      <h2 className=" text-center text-3xl text-white font-pbold tracking-widest">
        Sign in
      </h2>
      <form onSubmit={(e) => handleForm(e)} className="flex flex-col">
        <label className="text-xl mobile:text-lg text-mainWhite font-pbold tracking-wider mt-5">
          Email
        </label>
        <input
          className=" outline-none border-0 px-3 h-9 w-full rounded-md mt-1 text-white font-pmedium tracking-widest inputBg hover:"
          type="text"
        />
        <label className="text-xl mobile:text-lg text-mainWhite font-pbold tracking-wider mt-7">
          Password
        </label>
        <input
          className=" outline-none border-0 px-3 h-9 w-full rounded-md mt-1 text-white font-pmedium tracking-widest inputBg hover:"
          type="password"
        />
        <div className=" mt-7 ">
          <div
            className="inline-flex items-center cursor-pointer"
            onClick={boxChange}
          >
            <div
              className={` border-2 border-white rounded-sm h-4 aspect-square  ${
                checkBox ? "bg-white" : "bg-transparent"
              }`}
            ></div>
            <p className="ml-2 text-mainWhite font-pmedium tracking-wide">
              Remember me
            </p>
          </div>
        </div>
        <button className=" h-10 w-full bg-white font-pbold tracking-widest mt-4 text-mainBlue rounded-lg transition duration-150 hover:bg-mainWhite">
          Log in
        </button>
      </form>
      <div className="mt-7 flex flex-col gap-1">
        <p className="text-subWhite tracking-wider font-pbold text-center ">
          Dont Have Account?{" "}
          <Link to={"/Register"}>
            <span
              onClick={() => props.setShow(2)}
              className="text-white cursor-pointer relative before:content-'' before:left-0 before:absolute before:w-0 before:h-[2px] before:bottom-[-1.5px] before:rounded-lg before:bg-white hover:before:w-full before:transition-all before:duration-200"
            >
              Register
            </span>
          </Link>
        </p>
        <p className=" inline-flex mx-auto tracking-wider font-pbold text-center text-white cursor-pointer relative before:content-'' before:left-0 before:absolute before:w-0 before:h-[2px] before:bottom-[-1.5px] before:rounded-lg before:bg-white hover:before:w-full before:transition-all before:duration-200">
          Forgot Password
        </p>
      </div>
    </div>
  );
}
