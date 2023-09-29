import Trade from "./Trade";
import { StocksAPI } from "../../../../API/StocksAPI";
export default function ActiveTrades() {
  return (
    <div className="bg-white w-full rounded-md p-6">
      <h2 className="font-kmedium text-3xl mb-6">Active Trades</h2>
      <div className="flex justify-center">
        {StocksAPI.slice(0, 3).map((e) => (
          <Trade
            percentage={e.Percentage}
            coinName={e.coinTitle}
            coinImage={e.coinImage}
          />
        ))}
      </div>
    </div>
  );
}
