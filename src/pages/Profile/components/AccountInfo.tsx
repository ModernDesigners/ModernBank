export default function AccountInfo(props: {
  name: string;
  surname: string;
  phone: string;
  mail: string;
}) {
  return (
    <div className="flex flex-col gap-1 mt-5 ">
      <div className=" w-full border-b border-deadBlack flex justify-between items-center py-1 sm2:flex-col">
        <p className=" font-pbold text-mainBlack tracking-wider">Name: </p>
        <p className=" font-pbold text-subBlack tracking-wider">{props.name}</p>
      </div>
      <div className=" w-full border-b border-deadBlack flex justify-between items-center py-1 sm2:flex-col">
        <p className=" font-pbold text-mainBlack tracking-wider">Surname: </p>
        <p className=" font-pbold text-subBlack tracking-wider">
          {props.surname}
        </p>
      </div>
      <div className=" w-full border-b border-deadBlack flex justify-between items-center py-1 sm2:flex-col">
        <p className=" font-pbold text-mainBlack tracking-wider">Phone: </p>
        <p className=" font-pbold text-subBlack tracking-wider">
          {props.phone}
        </p>
      </div>
      <div className=" w-full border-b border-deadBlack flex justify-between items-center py-1 sm2:flex-col">
        <p className=" font-pbold text-mainBlack tracking-wider">Mail: </p>
        <p className=" font-pbold text-subBlack tracking-wider">{props.mail}</p>
      </div>
    </div>
  );
}
