import { useState } from "react";
import "./App.css";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meal/Meal";
import CartProvider from "./Store/Cart-Provider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const ShowCartHandler =() =>{
    setCartIsShown(false);
  };
  const HideCartHandler =() =>{
    setCartIsShown(true);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={ShowCartHandler}/> }
      <Header onShowCart={HideCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
