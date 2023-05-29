import "./App.css";
import "./utils.css";
import { injectStyle } from "react-toastify/dist/inject-style";

// CALL IT ONCE IN YOUR APP

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
import { Checkout } from "./Pages/Checkout/Checkout";
import { ToastContainer } from "react-toastify";
import { DataState } from "./Contexts/Data/DataContext";
import { Loading } from "./Components/Loading/Loading";
import { PageNotFound } from "./Pages/ErrorPage/PageNotFound";
import { OrderPlaced } from "./Pages/Order_Placed/OrderPlaced";






function App() {
  injectStyle();



  const {loading}=DataState()
  return (
    <div className="App">
{loading && <Loading/>}
    <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisting" element={ <ProductListing />} />
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
        <Route path="/checkout" element={
          <RequiresAuth>
        <Checkout/>
          </RequiresAuth>
        } />
           <Route path="/orderPlaced" element={<OrderPlaced/>} />
            <Route path="/*" element={<PageNotFound/>} />
      </Routes>
      <ToastContainer position="bottom-center"
        autoClose={1000}
        
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </div>
    
    </div>
  );
}

export default App;
