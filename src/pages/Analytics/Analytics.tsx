import ActiveTrades from "./components/ActiveTrades/ActiveTrades";
import Spends from "./components/Spends";
import Trades from "./components/Trades";
import TransactionCard from "./components/TransactionCard";

export default function Statistics() {
  return (
    <div className="container flex flex-col gap-10">
      <div className="flex  w-full justify-center">
        <div className="flex rounded-xl overflow-hidden md:flex-col">
          <TransactionCard isIncome={true} amount={3205} transactions={21} />
          <div className="bg-line h-full w-[1.2px] md:w-full md:h-[1px]"></div>
          <TransactionCard isIncome={false} amount={1020} transactions={15} />
        </div>
      </div>

      <div className="flex justify-between gap-5 2xl:flex-col">
        <Trades />
        <ActiveTrades />
      </div>
      <Spends />
    </div>
  );
}
