import { CheckPriceColor } from "./CheckPriceColor";
import diagram from "../assets/images/icons/diagram.svg";
interface StockInterface {
  price: number;
  coinTitle: string;
  image: string;
}
export default function Stock({ price, coinTitle, image }: StockInterface) {
  let priceColorTernary =
    CheckPriceColor(price).isNegative === 1 ? (
      <p className="font-pmedium text-success">
        +{CheckPriceColor(price).Value}%
      </p>
    ) : (
      <p className="font-pmedium text-warning">
        -{CheckPriceColor(price).Value}%
      </p>
    );

  return (
    <div className="flex items-center justify-between ">
      <div className="flex gap-4 items-center">
        <div className="bg-bg rounded-xl p-3">
          <img src={image} alt="" className="w-[43px]" />
        </div>
        <div>
          <h2 className="font-kmedium text-xl">{coinTitle}</h2>
          {priceColorTernary}
        </div>
      </div>
      <div className="p-4 bg-bg rounded-xl cursor-pointer">
        <img src={diagram} alt="" />
      </div>
    </div>
  );
}
