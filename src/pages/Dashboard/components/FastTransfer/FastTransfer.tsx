import React from "react";
import Transfer from "./Transfer";
import { ContactsAPI } from "../../../../API/ContactsAPI";

export default function FastTransfer() {
  return (
    <div className="w-full">
      <h1 className="tracking-wider font-semibold font-kmedium text-[22px] pb-3 border-b border-b-line">
        Fast Transfer
      </h1>
      <div className="flex flex-col gap-5 pt-5">
        {ContactsAPI.map((e, i) => (
          <Transfer
            key={i}
            userName={e.userName}
            userNickname={e.userNickname}
            userImage={e.userImage}
          />
        ))}
      </div>
    </div>
  );
}
