import Navbar from "./components/Navbar/Navbar";
import Contacts from "./pages/Contacts/Contacts";
import Dashboard from "./pages/Dashboard/Dashboard";
import Help from "./pages/Help/Help";
import Profile from "./pages/Profile/Profile";
import StocksPage from "./pages/StocksPage/StocksPage";
import Statistics from "./pages/Analytics/Statistics";
import History from "./pages/History/History";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Authentication from "./pages/Authentication/Authentication";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = {
    session: true,
  };
  useEffect(() => {
    if (user.session && location.pathname == "/") {
      navigate("/Dashboard");
    }
    if (
      user.session == false &&
      location.pathname !== "/Login" &&
      location.pathname !== "/Register"
    ) {
      navigate("/Login");
    }
  }, []);
  const appRoutes: JSX.Element = (
    <Routes>
      <Route path="/">
        <Route path="Login" element={<Authentication />} />
        <Route path="Register" element={<Authentication />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Analytics" element={<Statistics />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Contacts" element={<Contacts />} />
        <Route path="History" element={<History />} />
        <Route path="Stocks" element={<StocksPage />} />
        <Route path="Help" element={<Help />} />
      </Route>
    </Routes>
  );
  return (
    <>
      {location.pathname !== "/Register" && location.pathname !== "/Login" ? (
        <Navbar />
      ) : undefined}

      {getApp(appRoutes)}
    </>
  );
}

function getApp(children: JSX.Element) {
  const location = useLocation();
  if (location.pathname == "/Login" || location.pathname == "/Register") {
    return children;
  } else {
    return (
      <div className="flex flex-col pt-24 pb-32 w-[calc(100%-280px)] ml-auto items-center lg:mr-auto lg:w-full sm:pb-0">
        {children}
      </div>
    );
  }
}

export default App;
