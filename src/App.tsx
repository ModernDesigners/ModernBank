import Navbar from "./components/Navbar/Navbar";
import Analytics from "./pages/Analytics/Analytics";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import StocksPage from "./pages/StocksPage/StocksPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col pt-32 pb-32 w-[calc(100%-280px)] ml-auto items-center lg:mr-auto lg:w-[90%]">
        <StocksPage />
      </div>
    </>
  );
}

export default App;
