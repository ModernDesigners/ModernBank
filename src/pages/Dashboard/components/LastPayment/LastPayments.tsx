import Payment from "./Payment";
import { LastPaymentAPI } from "../../../../API/LastPaymentAPI";

export default function LastPayments() {
  return (
    <div className="w-full">
      <h1 className="tracking-wider font-semibold font-kmedium text-[22px] pb-3 border-b border-b-line">
        Last Payments
      </h1>
      <div className="pt-5 flex flex-col gap-5">
        {LastPaymentAPI.slice(0, 4).map((e) => (
          <Payment title={e.title} image={e.image} price={e.price} />
        ))}
      </div>
      <div className="w-full bg-white mt-4 p-5 rounded-lg flex items-center justify-center cursor-pointer">
        <p className="font-pmedium">See More</p>
      </div>
    </div>
  );
}
