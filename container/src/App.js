import React from 'react';
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  );
}

export default App;
