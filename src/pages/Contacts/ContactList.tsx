import { useState } from "react";
import arrowup from "../../assets/images/icons/arrowup2.svg";
import Contact from "./Contact";
import { Ifriends } from "./Contacts";

export default function ContactList(props: {
  listName: string;
  list: Ifriends[];
}) {
  const [list, setList] = useState(false);
  return (
    <div>
      <div
        onClick={() => setList((state) => !state)}
        className="flex cursor-pointer justify-between bg-subWhite2 border-b-2 border-subWhite3 bg-opacity-40 p-4 hover:bg-opacity-100 duration-200"
      >
        <p className="font-kmedium text-lg select-none">
          {props.listName + " " + `(${props.list.length})`}
        </p>
        <img
          className={`${list ? "" : "rotate-180"} select-none`}
          src={arrowup}
          alt=""
        />
      </div>
      <div
        className={`bg-white select-none flex flex-col gap-5 overflow-hidden transition-all duration-200 origin-top  ${
          list ? "scale-y-1 py-4" : "scale-y-0 h-0"
        }`}
      >
        {props.list.map((item: Ifriends) => (
          <Contact
            key={item.id}
            id={item.id}
            name={item.name}
            img={item.img}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
}
