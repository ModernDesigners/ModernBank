import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Help from "./pages/Help/Help";
import Profile from "./pages/Profile/Profile";
import StocksPage from "./pages/StocksPage/StocksPage";
import Analytics from "./pages/Analytics/Analytics";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col pt-24 pb-32 w-[calc(100%-280px)] ml-auto items-center lg:mr-auto lg:w-full sm:pb-0">
        <Profile />
      </div>
    </>
  );
}

export default App;
