import visa from "../../../assets/images/icons/visa.svg";
import masterCard from "../../../assets/images/icons/masterCard.svg";
import mBank from "../../../assets/images/icons/MBANK.svg";

export default function CreditCard() {
  return (
    <div className="flex max-w-full	 flex-col h-[228px] justify-between p-7 bg-gradient-to-br from-mainBlue to-mainPurpleFade w-[600px] rounded-2xl shadow-cardShadow">
      <div className="flex justify-between">
        <h1 className="text-3xl text-white font-pmedium">$10,388.32</h1>
        <div className="flex flex-col gap-4">
          <div className=" bg-opacity-20 bg-white p-2 opacity-2 rounded-sm w-[50px] h-[22px] flex items-center justify-center">
            <img src={masterCard} alt="" />
          </div>
          <div className=" bg-opacity-20 bg-white p-2 opacity-2 rounded-sm w-[50px] h-[22px] flex items-center justify-center">
            <img src={visa} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-white font-pmedium text-lg tracking-wider">
            NICK JORDAN
          </h2>
          <h2 className="text-white font-pmedium tracking-wider">**** 5772</h2>
        </div>
        <div>
          <img src={mBank} alt="MobileBank" />
        </div>
      </div>
    </div>
  );
}
