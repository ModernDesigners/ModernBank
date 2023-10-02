import Badges from "../API/Badges";
import verifyIcon from "../assets/images/icons/verify.svg";

export default function Badge(props: { badgeId: number }) {
  let getBadge = Badges.find((item) => item.id == props.badgeId);
  return (
    <div className="flex flex-col items-center justify-center text-center w-[120px]">
      <div
        className={`flex justify-center items-center h-20 aspect-square rounded-full border-2`}
        style={{
          backgroundColor: getBadge?.color,
          borderColor: getBadge?.bColor,
        }}
      >
        <img className="h-10" src={verifyIcon} alt="verifyIcon" />
      </div>
      <p className="mt-2 text-subBlack2 font-pbold text-sm2 tracking-widest max-w-[120px]">
        {getBadge?.name}
      </p>
    </div>
  );
}
