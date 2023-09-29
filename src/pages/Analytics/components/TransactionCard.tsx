interface TransactionInterface {
  isIncome: boolean;
  amount: number;
  transactions: number;
}
export default function TransactionCard({
  isIncome,
  amount,
  transactions,
}: TransactionInterface) {
  const amountSpacing = (e: number) => {
    const spacedIndexes = [0, 3, 6];

    const withSpacing = String(e)
      .split("")
      .map((elem, index) => {
        return spacedIndexes.includes(index) ? elem + " " : elem;
      });

    return withSpacing;
  };
  return (
    <div className="w-[450px] bg-white text-center p-8 flex-col flex gap-5">
      <h2 className="font-kmedium text-xl">
        {isIncome ? "INCOME" : "OUTCOME"}
      </h2>
      <h1
        className={`${
          isIncome ? "text-success" : "text-warning"
        } font-pmedium text-[50px]`}
      >
        ${amountSpacing(amount)}
      </h1>
      <p className="font-kmedium text-lg">
        {transactions} {isIncome ? "Income" : "Outcome"} Transactions
      </p>
      <button className="font-pmedium bg-black p-2 rounded-xl mt-3 text-white">
        See list
      </button>
    </div>
  );
}
