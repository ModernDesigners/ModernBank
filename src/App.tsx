import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col pt-32 w-[calc(100%-280px)] ml-auto items-center">
        <Profile />
      </div>
    </>
  );
}

export default App;
