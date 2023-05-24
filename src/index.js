import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import { makeServer } from "./server";
import { DataContextProvider } from "./Contexts/Data/DataContext";
import { AuthContextProvider } from "./Contexts/Auth/AuthContext";
import { OrderContextProvider } from "./Contexts/Data/OrderContext";
import { AddressContextProvider } from "./Contexts/Data/AddressContext";

// Call make Server
makeServer();

// import React from "react";

// import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <DataContextProvider>
        <AuthContextProvider>
          <OrderContextProvider>
            <AddressContextProvider>
              <App />
            </AddressContextProvider>
          </OrderContextProvider>
        </AuthContextProvider>
      </DataContextProvider>
    </Router>
  </React.StrictMode>
);

// reportWebVitals();

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <DataContextProvider>
//       <AuthContextProvider>
//       <OrderContextProvider>
//       <AddressContextProvider>
//         <App />
//         </AddressContextProvider>
//         </OrderContextProvider>
//         </AuthContextProvider>
//       </DataContextProvider>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
