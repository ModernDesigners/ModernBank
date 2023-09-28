import LoginForm from "../../components/Authentication/LoginForm";
import LoginNavbar from "../../components/Navbar/LoginNavbar";

export default function Login() {
  return (
    <div className="flex min-h-screen">
      <LoginNavbar />
      <div className="w-5/12 bg-gradient-to-b from-mainPurple to-mainBlue m-h-full rounded-r-5xl flex flex-col justify-center px-20">
        <LoginForm />
      </div>
      <div className="w-7/12"></div>
    </div>
  );
}
