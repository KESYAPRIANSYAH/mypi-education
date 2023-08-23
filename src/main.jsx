import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Authentication from "./layouts/Authentication";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./layouts/Dashboard";
import Home from "./pages/Home";
import Package from "./pages/Package";
import Payment from "./pages/Payment";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<App />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="p" element={<Package />} />
      </Route>
      <Route element={<Authentication />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="payment" element={<Payment />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
