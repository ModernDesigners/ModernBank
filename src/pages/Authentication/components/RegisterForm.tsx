import { useState } from "react";

export default function RegisterForm(props: {
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
      className={`flex flex-col gap-5 mobile:!opacity-100 opacity-100 transition-opacity duration-300 ${
        props.show ? "visible" : " !opacity-0 absolute -left-full"
      }`}
    >
      <h2 className=" text-center text-3xl text-white font-pbold tracking-widest mb-2">
        Sign up
      </h2>
      <form onSubmit={(e) => handleForm(e)} className="flex flex-col">
        <div className="flex items-center justify-between gap-8 mobile:flex-col mobile:gap-0">
          <div className="w-full">
            <p className="text-xl mobile:text-lg text-mainWhite font-pbold tracking-wider mt-5">
              First name
            </p>
            <input
              className=" outline-none border-0 px-3 h-9 w-full rounded-md mt-1 text-white font-pmedium tracking-widest inputBg hover:"
              type="text"
            />
          </div>
          <div className="w-full">
            <p className="text-xl mobile:text-lg text-mainWhite font-pbold tracking-wider mt-5">
              Last name
            </p>
            <input
              className=" outline-none border-0 px-3 h-9 w-full rounded-md mt-1 text-white font-pmedium tracking-widest inputBg hover:"
              type="text"
            />
          </div>
        </div>
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
        <label className="text-xl mobile:text-lg text-mainWhite font-pbold tracking-wider mt-7">
          Repeat password
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
              I Agree <span className="text-white">Terms and Conditions</span>
            </p>
          </div>
        </div>
        <button className=" h-10 w-full bg-white font-pbold tracking-widest mt-4 text-mainBlue rounded-lg transition duration-150 hover:bg-mainWhite">
          Register
        </button>
      </form>
      <div className="mt-7 flex flex-col gap-1">
        <p className="text-subWhite tracking-wider font-pbold text-center ">
          Already have an account?{" "}
          <span
            onClick={() => props.setShow(1)}
            className="text-white cursor-pointer relative before:content-'' before:left-0 before:absolute before:w-0 before:h-[2px] before:bottom-[-1.5px] before:rounded-lg before:bg-white hover:before:w-full before:transition-all before:duration-200"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}
