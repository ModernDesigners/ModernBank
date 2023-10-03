import React from "react";
import { HelpAPI } from "../../API/HelpAPI";

export default function Help() {
  return (
    <div className="container flex flex-col gap-5">
      <div className=" bg-white rounded-xl p-4">
        <h2 className="font-kmedium text-xl">Pick a topic</h2>
        <div className="flex flex-col gap-5 mt-5 pl-2">
          {HelpAPI.questions.map((e: string, i: number) => (
            <div key={i} className="bg-bg p-3 rounded-xl">
              <p className="font-kmedium">{e}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl p-4">
        <h2 className="font-kmedium text-xl">Contact</h2>
        <div className="flex gap-10  mt-6 justify-center pb-4 md:flex-col items-center">
          {HelpAPI.contactButtons.map((e, i) => {
            let color = e.color;
            let background = e.background;
            return (
              <div
                key={i}
                style={{ background }}
                className="p-2 rounded-lg w-[150px]  text-center cursor-pointer md:w-full"
              >
                <button style={{ color }} key={i} className="font-kmedium">
                  {e.title}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
