import { useState, useContext } from "react";
import "./App.scss";
import data from "./assets/data";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { ThemeContext } from "./main";

function App() {
  const [menu, setMenu] = useState(data.menu);
  const [cart, setCart] = useState([]);
  console.log(cart);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Menu menu={menu} cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart menu={menu} cart={cart} setCart={setCart} />}
          />
        </Routes>
      </main>
      <button onClick={toggleTheme}>
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export default App;
