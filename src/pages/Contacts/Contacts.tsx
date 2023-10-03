import { useMemo } from "react";
import friendsAPI from "../../API/FriendsAPI";
import ContactList from "./ContactList";

export interface Ifriends {
  id: number;
  img: string;
  name: string;
  status: number;
}

export default function Contacts() {
  const friends: Ifriends[] = friendsAPI;
  const friendsList = useMemo(() => {
    return {
      friends: friends.filter((item) => item.status == 1),
      favorites: friends.filter((item) => item.status == 2),
      employees: friends.filter((item) => item.status == 3),
    };
  }, []);
  return (
    <div className="container">
      <h1 className="font-pmedium text-2xl mb-4">Contacts</h1>
      <div className=" rounded-2xl overflow-hidden bg-mainWhite h-[calc(100vh-200px)] overflow-y-auto">
        <ContactList listName="Friends" list={friendsList.friends} />
        <ContactList listName="Favorites" list={friendsList.favorites} />
        <ContactList listName="Employees" list={friendsList.employees} />
      </div>
    </div>
  );
}
