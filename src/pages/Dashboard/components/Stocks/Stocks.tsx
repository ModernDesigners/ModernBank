import Stock from "./Stock";
import a from "../../../../assets/images/coins/btc.png";
import { StocksAPI } from "../../../../API/StocksAPI";

export default function Stocks() {
  return (
    <div className="bg-white w-full rounded-lg pt-6 pl-5 pb-6 pr-5">
      <h1 className="tracking-wider font-semibold font-kmedium text-[22px] pb-3 border-b border-b-line">
        Fast Transfer
      </h1>
      <div className="flex flex-col gap-5 pt-4 pb-4">
        {StocksAPI.map((e, i) => (
          <Stock
            key={i}
            price={e.Percentage}
            coinTitle={e.coinTitle}
            image={e.coinImage}
          />
        ))}
      </div>
    </div>
  );
}
