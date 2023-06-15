import { useContext } from "react";
import Navbar from "./components/Navbar";
import { ActiveContext } from './context/context';
import LibraryRouters from "./routers/LibraryRouters";



const App = () => {
  const {isActive}=useContext(ActiveContext)
console.log(isActive)
  return (
    <div className={`w-full min-h-screen ${isActive?"bg-BACKGROUND text-FOREGROUND":"bg-FOREGROUND text-BACKGROUND"}`}>
     
        <header className="py-8 shadow-lg">
          <Navbar />
        </header>
        <main className="flex justify-center">
          <LibraryRouters />
        </main>
      
    </div>
  );
};

export default App;
