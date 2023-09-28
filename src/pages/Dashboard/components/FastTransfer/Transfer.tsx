import transferIcon from "../../../../assets/images/icons/arrangeverticalsquare.svg";
import card from "../../../../assets/images/icons/whiteCard.svg";
interface TransferInterface {
  userName: string;
  userNickname: string;
  userImage: string;
}
export default function Transfer({
  userName,
  userNickname,
  userImage,
}: TransferInterface) {
  return (
    <div className="flex justify-between bg-white rounded-lg p-2 mobile:flex-col mobile:items-center">
      <div className="flex items-center gap-4">
        <img src={userImage} alt="" className="w-[49px] mobile:py-5" />
        <div>
          <h2 className="font-pmedium text-lg">{userName}</h2>
          <p className="font-pmedium opacity-60 ">{userNickname}</p>
        </div>
      </div>
      <div className="flex items-center gap-5 ">
        <div className="p-5 border-line border-l-2 pl-7 cursor-pointer mobile:border-0 ">
          <img src={transferIcon} className="w-[27px]" alt="Transfer" />
        </div>
        <div className="p-5 border-line border-l-2 pl-7 cursor-pointer mobile:border-0">
          <img src={card} className="w-[27px]" alt="Card" />
        </div>
      </div>
    </div>
  );
}
