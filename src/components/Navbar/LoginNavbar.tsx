import questionIcon from "../../assets/images/icons/messagequestion.svg";
export default function LoginNavbar() {
  return (
    <div className=" z-10 fixed w-full top-10 xls:top-5 flex items-center">
      <div className="h-[60px] w-[300px] bg-white rounded-r-xl shadow-logoShadow flex justify-center items-center cursor-pointer transition duration-200 hover:shadow-glowShadow mobile:h-12 mobile:w-56">
        <div className="text-gradient bg-gradient-to-r from-mainPurple to-mainBlue bg-clip-text font-pbold tracking-widest text-2xl mobile:text-lg">
          Modern Bank
        </div>
      </div>
      <div className=" cursor-pointer h-14 aspect-square bg-white rounded-xl shadow-logoShadow fixed right-4 flex justify-center items-center hover:bg-iconBgHover2 transition duration-200 mobile:h-12 ">
        <img src={questionIcon} alt="questionIcon" />
      </div>
    </div>
  );
}
