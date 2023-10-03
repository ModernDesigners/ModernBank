import Payment from "../Dashboard/components/LastPayment/Payment";
import { LastPaymentAPI } from "../../API/LastPaymentAPI";

export default function History() {
  const randomPayment = (paymentQuantity: number) => {
    let arr = [];
    for (let i = 0; i < paymentQuantity; i++) {
      const randomNumber = Math.floor(Math.random() * LastPaymentAPI.length);
      arr.push(LastPaymentAPI[randomNumber]);
    }
    return arr;
  };

  return (
    <div className="container flex flex-col gap-12 lg:pt-5">
      <div>
        <h1 className="font-pmedium text-2xl mb-4">Today</h1>
        <div className="bg-white rounded-lg ">
          {randomPayment(4).map((e, i) => (
            <Payment key={i} title={e.title} image={e.image} price={e.price} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="font-pmedium text-2xl mb-4">Yesterday</h1>
        <div className="bg-white rounded-lg ">
          {randomPayment(2).map((e, i) => (
            <Payment key={i} title={e.title} image={e.image} price={e.price} />
          ))}
        </div>
      </div>
      <div>
        <h1 className="font-pmedium text-2xl mb-4">This Week</h1>
        <div className="bg-white rounded-lg ">
          {randomPayment(3).map((e, i) => (
            <Payment key={i} title={e.title} image={e.image} price={e.price} />
          ))}
        </div>
      </div>
    </div>
  );
}
function randomNumber(arg0: number): any {
  throw new Error("Function not implemented.");
}
