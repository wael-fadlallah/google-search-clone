import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./components/Routes";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100">App</div>
    </div>
  );
}

export default App;
