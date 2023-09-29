import profileImage from "../../assets/images/users/userb.png";
import Badge from "../../components/Badge";

export default function Profile() {
  const badgeIds = [1, 2, 3, 4];
  return (
    <div className=" py-8 px-7 w-10/12 flex flex-col bg-white">
      <div className="flex justify-center">
        <img
          className=" h-24 aspect-square rounded-full"
          src={profileImage}
          alt="profileImage"
        />
      </div>
      <div className="flex flex-col gap-1 justify-center text-center mt-6">
        <h3 className=" text-mainBlack font-pbold text-xl tracking-widest">
          JOHN KORTIS
        </h3>
        <p className=" text-paragraph font-pbold text-md tracking-wider">
          CO OPERATOR
        </p>
      </div>

      <div className="mt-10">
        <p className="text-subBlack2 font-pbold text-xl tracking-widest">
          Badges
        </p>
        <div className="flex gap-6 items-start mt-8">
          {badgeIds.map((item, i) => (
            <Badge key={i} badgeId={item} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <p className="text-subBlack2 font-pbold text-xl tracking-widest">
          Account information
        </p>
      </div>
    </div>
  );
}
