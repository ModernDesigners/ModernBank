import receipt from "../../../../assets/images/icons/receipt.svg";
import info from "../../../../assets/images/icons/info.svg";
interface PaymentInterface {
  title: string;
  image: string;
  price: number;
}
export default function Payment({ title, image, price }: PaymentInterface) {
  const checkPriceColor = (currentPrice: number) => {
    let isNegative = Math.sign(currentPrice);
    if (isNegative === 1) {
      return <p className="font-pmedium text-success">+${currentPrice}</p>;
    } else {
      return (
        <p className="font-pmedium text-warning">-${Math.abs(currentPrice)}</p>
      );
    }
  };

  return (
    <div className="flex justify-between p-4 bg-white rounded-lg items-center">
      <div className="flex gap-6">
        <img className="w-[55px] h-[55px]" src={image} alt="" />
        <div>
          <p className="font-pmedium text-lg">{title}</p>
          {checkPriceColor(price)}
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
