import decorBLocks from "../../../assets/images/decorations/blocks.png";
import check from "../../../assets/images/icons/success.svg";

export default function WelcomeSide() {
  const benefits = [
    "100% Privacy",
    "Secure",
    "Easy transactions",
    "Daily offers",
    "Sponsor discounts",
    "24/7 Support",
  ];
  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-10 md:text-center md:px-6 md:mt-32">
      <h1 className=" font-pbold text-4xl text-black tracking-widest text-center">
        Welcome to{" "}
        <span className="text-gradient bg-gradient-to-r from-mainPurple to-mainBlue bg-clip-text ">
          Modern Bank
        </span>
      </h1>
      <p className="font-pbold text-lg text-subBlack tracking-wider">
        Make decisions that will change your life and make it easier.
      </p>
      <div className="flex items-center gap-16 mt-14 md:gap-8 sm:gap-4 mobile:flex-col-reverse mobile:w-full">
        <div className="flex flex-col gap-7 md:gap-4  mobile:mt-10 mobile:w-full mobile:px-6">
          {benefits.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <img src={check} className="md:h-6" alt="check" />

              <p className=" font-pbold text-md text-subBlack2 tracking-widest md:text-sm mobile:text-md">
                {item}
              </p>
            </div>
          ))}
        </div>
        <div className=" animate-fly">
          <img
            className="md:h-56  sm:h-52 mobile:h-60"
            src={decorBLocks}
            alt="decoration-blocks"
          />
        </div>
      </div>
    </div>
  );
}
