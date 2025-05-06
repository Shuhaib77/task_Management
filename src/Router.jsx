import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayOut from "./pages/auth/AuthLayOut";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import AdminLayout from "./pages/auth/admin/AdminLayout";
import AddComplaints from "./pages/auth/admin/layOut/AddComplaints";
import CreateUser from "./pages/auth/admin/layOut/CreateUser";
import HomeLayOut from "./pages/nonauth/home/HomeLayOut";
import PendingComplaints from "./pages/nonauth/home/layOut/PendingComplaints";
import ExComplaints from "./pages/nonauth/home/layOut/ExComplaints";
import CompleatedComplaints from "./pages/nonauth/home/layOut/CompleatedComplaints";
import AllComplaints from "./pages/auth/admin/layOut/AllComplaints";
import AdminDashboard from "./pages/auth/admin/layOut/AdminDashboard";
import UserDashboard from "./pages/nonauth/home/layOut/UerDasboard";

function UserRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthLayOut />}>
          <Route index element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
        <Route path="admin/dashboard" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />}></Route>
          <Route path="adduser" element={<CreateUser />}></Route>
          <Route path="addcomplaints" element={<AddComplaints />}></Route>
          <Route path="allcomplaints" element={<AllComplaints />}></Route>
        </Route>
        <Route path="/home" element={<HomeLayOut />}>
          <Route index element={<UserDashboard />}></Route>
          <Route path='pendings' element={<PendingComplaints />}></Route>
          <Route path="excomplaint" element={<ExComplaints />}></Route>
          <Route
            path="closeComplaints"
            element={<CompleatedComplaints />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default UserRouter;
