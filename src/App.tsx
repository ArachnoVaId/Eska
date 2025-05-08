import { useEffect } from "react";
import AppRoutes from "./routes";
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false, // whether animation should happen only once
    });
  }, []);

  return <AppRoutes />;
}

export default App;
