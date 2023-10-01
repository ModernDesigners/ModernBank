import { CheckPriceColor } from "../../../../components/CheckPriceColor";
interface TradeInterface {
  percentage: number;
  coinName: string;
  coinImage: string;
}
export default function Trade({
  percentage,
  coinName,
  coinImage,
}: TradeInterface) {
  let priceColorTernary =
    CheckPriceColor(percentage).isNegative === 1 ? (
      <p className="font-pmedium text-success">
        +${CheckPriceColor(percentage).Value}
      </p>
    ) : (
      <p className="font-pmedium text-warning">
        -${CheckPriceColor(percentage).Value}
      </p>
    );

  return (
    <div className="flex flex-col gap-[10px] items-center w-[30%] p-5">
      <img src={coinImage} className="w-[55px]" alt="" />
      <p className="font-kmedium">{coinName}</p>
      {priceColorTernary}
      <div className="flex">
        <button className="text-[14px] font-kmedium border-t border-l border-b border-success rounded-l-lg  p-[8px] w-[80px] ">
          BUY
        </button>
        <div className="bg-line w-[2px] h-full "></div>
        <button className="text-[14px] font-kmedium border-t border-r border-b border-warning rounded-r-lg  p-[8px] w-[80px] ">
          SELL
        </button>
      </div>
    </div>
  );
}
