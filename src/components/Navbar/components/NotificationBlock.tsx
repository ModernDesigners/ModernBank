import Logo from "../../../assets/images/icons/Logo.png";
import { NotificationsI } from "../SettingsBar";

export default function NotificationBlock(props: NotificationsI) {
  return (
    <div className="flex items-center py-2 px-3 cursor-pointer hover:bg-subWhite2 transition-colors duration-100">
      <div className="h-[25px] aspect-square relative">
        <img src={Logo} alt="ModernBank-Logo" />
        <div
          className={`absolute top-[-2px] right-[-2px] h-2 aspect-square rounded-full ${
            props.status == 1 ? "bg-success" : "bg-warning"
          } `}
        ></div>
      </div>
      <p className=" ml-2 font-pmedium text-sm tracking-wider">{props.text}</p>
    </div>
  );
}
