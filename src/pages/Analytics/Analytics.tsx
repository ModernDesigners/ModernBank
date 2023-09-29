import ActiveTrades from "./components/ActiveTrades/ActiveTrades";
import Trades from "./components/Trades";
import TransactionCard from "./components/TransactionCard";

export default function Analytics() {
  return (
    <div className="container pt-[100px] pb-[100px]  flex flex-col gap-10">
      <div className="flex  w-full justify-center">
        <div className="flex rounded-xl overflow-hidden">
          <TransactionCard isIncome={true} amount={3205} transactions={21} />
          <div className="bg-line h-full w-[1.2px]"></div>
          <TransactionCard isIncome={false} amount={1020} transactions={15} />
        </div>
      </div>

      <div className="flex justify-between gap-5">
        <Trades />
        <ActiveTrades />
      </div>
    </div>
  );
}
