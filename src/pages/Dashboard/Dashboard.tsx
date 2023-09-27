import Card from "./components/Card";
import Transfer from "../../assets/images/icons/arrowswaphorizontal.svg";
import Security from "../../assets/images/icons/shield.svg";
import History from "../../assets/images/icons/notificationstatus.svg";
import Limit from "../../assets/images/icons/unlimited.svg";
import LastPayments from "./components/LastPayment/LastPayments";

export default function Dashboard() {
  return (
    <div className="flex ">
      <div className="w-6/12 flex flex-col items-center gap-10">
        <Card />
        <div className="flex gap-10 p-5">
          <DashboardIcon image={Transfer} title={"Transfer"} />
          <DashboardIcon image={Security} title={"Security"} />
          <DashboardIcon image={History} title={"History"} />
          <DashboardIcon image={Limit} title={"Limit"} />
        </div>
        <LastPayments />
      </div>
      <div className="w-6/12 ">g</div>
    </div>
  );
}

interface iconInterface {
  image: string;
  title: string;
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
