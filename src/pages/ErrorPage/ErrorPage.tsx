import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className=" py-8 px-7 w-10/12 flex flex-col bg-white sm:w-full rounded-2xl">
      <h1 className="text-center font-pbold tracking-widest text-2xl">
        Oops looks like you are lost...
      </h1>
      <div className="flex justify-center">
        <Link className=" rounded-2xl" to={"/Dashboard"}>
          <button className="block px-9 py-2 mt-10 font-pbold text-white bg-mainBlue rounded-2xl tracking-widest">
            Go to main page
          </button>
        </Link>
      </div>
    </div>
  );
}
