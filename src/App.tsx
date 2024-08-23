import { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Basket, Favorite, Order } from "./pages";

const App: FunctionComponent = () => {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/order" element={<Order />} />
        {/* <Route path="/basket" element={<Basket />} /> */}
      </Routes>
    </div>
  );
};

export default App;
