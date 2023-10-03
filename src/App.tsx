import Navbar from "./components/Navbar/Navbar";
import Contacts from "./pages/Contacts/Contacts";
import Dashboard from "./pages/Dashboard/Dashboard";
import Help from "./pages/Help/Help";
import Profile from "./pages/Profile/Profile";
import StocksPage from "./pages/StocksPage/StocksPage";
import Analytics from "./pages/Analytics/Analytics";
import History from "./pages/History/History";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col pt-24 pb-32 w-[calc(100%-280px)] ml-auto items-center lg:mr-auto lg:w-full sm:pb-0">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Analytics" element={<Analytics />} />
          <Route path="Contacts" element={<Contacts />} />
          <Route path="History" element={<History />} />
          <Route path="Stocks" element={<StocksPage />} />
          <Route path="Help" element={<Help />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
