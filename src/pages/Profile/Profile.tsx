import profileImage from "../../assets/images/users/userb.png";
import Badge from "../../components/Badge";
import AccountInfo from "./components/AccountInfo";

export default function Profile() {
  const accountInfo = {
    Name: "Luka",
    Surname: "Fexshvelashvili",
    Phone: "+995598159215",
    Mail: "lukitofexshvelashvili@gmail.com",
  };

  const badgeIds = [1, 2, 3, 4];
  return (
    <div className=" py-8 px-7 w-10/12 flex flex-col bg-white sm:w-full">
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
        <div className="md:justify-center flex gap-6 items-start mt-8 flex-wrap">
          {badgeIds.map((item, i) => (
            <Badge key={i} badgeId={item} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <p className="text-subBlack2 font-pbold text-xl tracking-widest">
          Account information
        </p>
        <AccountInfo
          name={accountInfo.Name}
          surname={accountInfo.Surname}
          phone={accountInfo.Phone}
          mail={accountInfo.Mail}
        />
      </div>
      <div className="mt-12">
        <p className="text-subBlack2 font-pbold text-xl tracking-widest">
          Security
        </p>
        <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
          <button className="text-mainWhite font-pmedium h-[42px] w-[250px] tracking-wider text-sm bg-purple rounded-md border-none cursor-pointer transition duration-300 hover:bg-purpleHover ">
            Change password
          </button>
          <button className=" text-mainWhite font-pmedium h-[42px] w-[250px] tracking-wider text-sm bg-purple rounded-md border-none cursor-pointer transition duration-300 hover:bg-purpleHover ">
            Turn on 2FA Verification
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 mt-5 flex-wrap">
          <button className="text-mainWhite font-pmedium h-[42px] w-[250px] tracking-wider text-sm bg-purple rounded-md border-none cursor-pointer transition duration-300 hover:bg-purpleHover ">
            Kick all devices
          </button>
          <button className="text-mainWhite font-pmedium h-[42px] w-[250px] tracking-wider text-sm bg-purple rounded-md border-none cursor-pointer transition duration-300 hover:bg-purpleHover ">
            Block Credits
          </button>
        </div>
      </div>
    </div>
  );
}
