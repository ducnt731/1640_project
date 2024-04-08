import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Page/admin";
import AdminEvent from "./Page/adminEvent";
import ManageAccount from "./Page/manageAccount";
import AdminFaculty from "./Page/adminFaculty";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./Page/profileAdmin";
import App from "./App";
import AdminChart from "./Page/adminChart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/" element={<App/>}/>
        <Route path="admin/event" element={<AdminEvent/>}/>
        <Route path="admin/manage_accounts" element={<ManageAccount/>}/>
        <Route path="admin/faculty" element={<AdminFaculty/>}/>
        <Route path="admin/profile" element={<Profile/>}/>
        <Route path="admin/dashboard" element={<AdminChart/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  <ToastContainer
    position="top-left"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
  </>
)