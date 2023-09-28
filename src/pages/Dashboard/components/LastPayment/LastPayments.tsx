import Payment from "./Payment";
import { LastPaymentAPI } from "../../../../API/LastPaymentAPI";
import { useState } from "react";
export default function LastPayments() {
  const [showMore, setShowMore] = useState(4);
  console.log(showMore);

  return (
    <div className="w-full pt-[20px]">
      <h1 className="tracking-wider font-semibold font-kmedium text-[22px] pb-3 border-b border-b-line">
        Last Payments
      </h1>
      <div className="pt-5 flex flex-col gap-5">
        {LastPaymentAPI.slice(0, showMore).map((e, i) => (
          <Payment key={i} title={e.title} image={e.image} price={e.price} />
        ))}
      </div>
      <div
        className="w-full bg-white mt-4 p-5 rounded-lg flex items-center justify-center cursor-pointer"
        onClick={() => setShowMore(showMore === 4 ? LastPaymentAPI.length : 4)}
      >
        <p className="font-pmedium">
          {showMore === 4 ? "Show More" : "Show Less"}
        </p>
      </div>
    </div>
  );
}
