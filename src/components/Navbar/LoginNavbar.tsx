import questionIcon from "../../assets/images/icons/messagequestion.svg";
export default function LoginNavbar() {
  return (
    <div className="fixed w-full top-10 flex items-center">
      <div className="h-[60px] w-[300px] bg-white rounded-r-xl shadow-logoShadow flex justify-center items-center cursor-pointer transition duration-200 hover:shadow-glowShadow ">
        <div className="text-gradient bg-gradient-to-r from-mainPurple to-mainBlue bg-clip-text font-pbold tracking-widest text-2xl">
          Modern Bank
        </div>
      </div>
      <div className=" cursor-pointer h-14 aspect-square bg-iconBg rounded-xl fixed right-8 flex justify-center items-center hover:bg-iconBgHover transition duration-200">
        <img src={questionIcon} alt="questionIcon" />
      </div>
    </div>
  );
}
