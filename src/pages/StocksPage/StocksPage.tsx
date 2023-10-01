import { StocksAPI } from "../../API/StocksAPI";
import { CheckPriceColor } from "../../components/CheckPriceColor";
import Stock from "../../components/Stock";
import search from "../../assets/images/icons/search.svg";
import StocksList from "./StocksList";
let PriceColorTernary = (percent: number) => {
  return CheckPriceColor(percent).isNegative === 1 ? (
    <p className="font-pmedium text-success">
      +{CheckPriceColor(percent).Value}%
    </p>
  ) : (
    <p className="font-pmedium text-warning">
      -{CheckPriceColor(percent).Value}%
    </p>
  );
};
export default function StocksPage() {
  return (
    <div className="container">
      <h1 className="font-pmedium text-2xl text-center">On Hype</h1>
      <div className="bg-white w-full rounded-lg pt-12 pb-12 flex items-center justify-center mt-8 sm:flex-col gap-10 ">
        {StocksAPI.map((e, i) => (
          <div
            key={i}
            className="w-[20%] flex justify-center flex-col items-center gap-2  sm:w-full sm:border-b-2 sm:border-line sm:pb-3 last:border-hidden"
          >
            <img
              className="md:w-[55px] sm:min-w-[80px] w-[70px]"
              src={e.coinImage}
              alt=""
            />
            <h2 className="font-pmedium">{e.coinTitle}</h2>
            {PriceColorTernary(e.Percentage)}
          </div>
        ))}
      </div>
      <div className="flex justify-between pt-10 pb-10 sm:flex-col items-center gap-10">
        <h2 className="font-pmedium text-2xl ">On Trade</h2>
        <div className="flex justify-right relative p-6 w-[300px] max-w-full rounded-xl overflow-hidden bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <input
            type="text"
            placeholder="Search..."
            className=" placeholder:text-black font-kmedium absolute left-0 top-0 w-full h-full pl-4 pr-12 outline-none border-none "
          />
          <img
            src={search}
            alt="Search"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          />
        </div>
      </div>
      <StocksList />
    </div>
  );
}
