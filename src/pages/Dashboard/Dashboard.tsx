import CreditCard from "./components/CreditCard";
import Transfer from "../../assets/images/icons/arrowswaphorizontal.svg";
import Security from "../../assets/images/icons/shield.svg";
import History from "../../assets/images/icons/notificationstatus.svg";
import Limit from "../../assets/images/icons/unlimited.svg";
import LastPayments from "./components/LastPayment/LastPayments";
import FastTransfer from "./components/FastTransfer/FastTransfer";
import Stocks from "./components/Stocks/Stocks";
interface iconInterface {
  image: string;
  title: string;
}
export default function Dashboard() {
  return (
    <div className="flex gap-[200px] container justify-between pt-[100px] pb-[100px] 2xl:gap-20 xl:flex-col  ">
      <div className="w-6/12 flex flex-col items-center gap-10 xl:w-full">
        <CreditCard />
        <div className="flex gap-10 p-5">
          <DashboardIcon image={Transfer} title={"Transfer"} />
          <DashboardIcon image={Security} title={"Security"} />
          <DashboardIcon image={History} title={"History"} />
          <DashboardIcon image={Limit} title={"Limit"} />
        </div>
        <LastPayments />
      </div>
      <div className="w-6/12 flex flex-col items-center gap-10 xl:w-full">
        <FastTransfer />
        <Stocks />
      </div>
    </div>
  );
}

export const DashboardIcon = ({ image, title }: iconInterface) => {
  return (
    <div>
      <div className="w-[65px] h-[65px]  shadow-md mb-3 bg-white flex justify-center items-center rounded-xl">
        <img className="w-[20px]" src={image} alt="" />
      </div>
      <p className="font-kmedium text-[15px] text-center">{title}</p>
    </div>
  );
};
