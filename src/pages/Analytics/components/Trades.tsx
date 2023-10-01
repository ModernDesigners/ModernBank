export default function Trades() {
  return (
    <div className="bg-white w-full rounded-md p-6">
      <h2 className="font-kmedium text-3xl mb-6">Trades</h2>

      <div className="flex justify-between mobile:flex-col mobile:items-center mobile:gap-10">
        <div className="text-center md:hidden">
          <h2 className="text-gray text-[18px] font-pmedium opacity-0">a</h2>
          <p className="font-pmedium text-gray text-[16px] m-2">Income</p>
          <p className="font-pmedium text-gray text-[16px] m-2">Outcome</p>
          <div className="w-30px bg-line h-[1px]"></div>
          <p className="font-pmedium text-gray text-[16px] m-2">Profit</p>
        </div>
        <TradeInfo when="This Month" income={13600} outcome={4505} />
        <TradeInfo when="This Week" income={2120} outcome={2240} />
        <TradeInfo when="Today" income={6505} outcome={1150} />
      </div>
      <button className="font-pmedium bg-black p-2 rounded-xl mt-3 text-white w-[220px] mobile:m-auto block">
        See Details
      </button>
    </div>
  );
}
interface TradeInfoInterface {
  income: number;
  outcome: number;
  when: string;
}
export const TradeInfo = ({ income, outcome, when }: TradeInfoInterface) => {
  return (
    <div className="text-center">
      <h2 className="text-gray text-[18px] font-pmedium sm:text-[16px]">
        {when}
      </h2>
      <p className="font-pmedium text-success text-[16px] m-2">${income}</p>
      <p className="font-pmedium text-warning text-[16px] m-2">${outcome}</p>
      <div className="w-30px bg-line h-[1px]"></div>
      <p
        className={`font-pmedium ${
          income - outcome > income ? "text-success" : "text-warning"
        } text-[16px] m-2`}
      >
        ${income - outcome}
      </p>
    </div>
  );
};
