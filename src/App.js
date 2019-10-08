import React from "react";
import "./App.css";
import Header from "./header/Header";
import Main from "./main/Main";

function App() {
  return (
    <div>
      <header className="cart-header">
        <Header />
      </header>
      <Main />
    </div>
  );
}

export default App;
