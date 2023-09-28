import receipt from "../../../../assets/images/icons/receipt.svg";
import info from "../../../../assets/images/icons/info.svg";
import { CheckPriceColor } from "../../../../components/CheckPriceColor";
interface PaymentInterface {
  title: string;
  image: string;
  price: number;
}
export default function Payment({ title, image, price }: PaymentInterface) {
  let priceColorTernary =
    CheckPriceColor(price).isNegative === 1 ? (
      <p className="font-pmedium text-success">
        +${CheckPriceColor(price).Value}
      </p>
    ) : (
      <p className="font-pmedium text-warning">
        -${CheckPriceColor(price).Value}
      </p>
    );

  return (
    <div className="flex justify-between p-4 bg-white rounded-lg items-center">
      <div className="flex gap-6 items-center">
        <img className="w-[47px] h-[47px]" src={image} alt="" />
        <div>
          <p className="font-pmedium text-lg">{title}</p>
          {priceColorTernary}
        </div>
      </div>
      <div className="flex gap-5">
        <div className="group cursor-pointer p-3 bg-bg rounded">
          <img
            className="w-[20px] h-[20px] duration-200 group-hover:scale-[115%]"
            src={receipt}
            alt=""
          />
        </div>
        <div className="group cursor-pointer p-3 bg-bg rounded">
          <img
            className="w-[20px] h-[20px] duration-200 group-hover:scale-[115%]"
            src={info}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
