export default function Trades() {
  return (
    <div className="bg-white w-full rounded-md p-6">
      <h2 className="font-kmedium text-3xl mb-6">Trades</h2>

      <div className="flex justify-between">
        <div className="text-center">
          <h2 className="text-gray text-[18px] font-pmedium opacity-0">a</h2>
          <p className="font-pmedium text-gray text-[16px] m-2">Outcome</p>
          <p className="font-pmedium text-gray text-[16px] m-2">Income</p>
          <div className="w-30px bg-line h-[1px]"></div>
          <p className="font-pmedium text-gray text-[16px] m-2">Profit</p>
        </div>
        <div className="text-center">
          <h2 className="text-gray text-[18px] font-pmedium">This Month</h2>
          <p className="font-pmedium text-success text-[16px] m-2">4 505%</p>
          <p className="font-pmedium text-warning text-[16px] m-2">13 600$</p>
          <div className="w-30px bg-line h-[1px]"></div>
          <p className="font-pmedium text-success text-[16px] m-2">9 095$</p>
        </div>
        <div className="text-center">
          <h2 className="text-gray text-[18px] font-pmedium">This Month</h2>
          <p className="font-pmedium text-success text-[16px] m-2">4 505%</p>
          <p className="font-pmedium text-warning text-[16px] m-2">13 600$</p>
          <div className="w-30px bg-line h-[1px]"></div>
          <p className="font-pmedium text-success text-[16px] m-2">9 095$</p>
        </div>
        <div className="text-center">
          <h2 className="text-gray text-[18px] font-pmedium">This Month</h2>
          <p className="font-pmedium text-success text-[16px] m-2">4 505%</p>
          <p className="font-pmedium text-warning text-[16px] m-2">13 600$</p>
          <div className="w-30px bg-line h-[1px]"></div>
          <p className="font-pmedium text-success text-[16px] m-2">9 095$</p>
        </div>
      </div>
      <button className="font-pmedium bg-black p-2 rounded-xl mt-3 text-white w-[220px]">
        See Details
      </button>
    </div>
  );
}
