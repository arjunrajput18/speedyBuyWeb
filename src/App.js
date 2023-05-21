import "./App.css";
import "./utils.css";

import { Home } from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { ProductListing } from "./Pages/ProductListing/ProductListing";
import { Navbar } from "./Components/Navbar/Navbar";
import { Cart } from "./Pages/Cart/Cart";
import { Wishlist } from "./Pages/Wishlist/Wishlist";
import { ProductDetail } from "./Pages/ProductDetail/ProductDetail";
import Mockman from "mockman-js";
import { RequiresAuth } from "./Components/RequiresAuth/RequiresAuth";
import { Login } from "./Pages/Login/Login";
import { SignUp } from "./Pages/Login/SignUp";
import { Profile } from "./Pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={<ProductListing />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/profile"
          element={
            <RequiresAuth>
              <Profile />
            </RequiresAuth>
          }
        />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>

    </div>
  );
}

export default App;
