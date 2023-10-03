import { StocksAPI } from "../../API/StocksAPI";
import Stock from "../../components/Stock";

export default function StocksList() {
  return (
    <div className="bg-white rounded-xl p-4 flex flex-col gap-5">
      {[...StocksAPI, ...StocksAPI].map((e, i) => (
        <Stock
          key={i}
          price={e.Percentage}
          coinTitle={e.coinTitle}
          image={e.coinImage}
        />
      ))}
    </div>
  );
}
