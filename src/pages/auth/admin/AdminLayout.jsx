import React, { useState } from "react";
import Header from "../../../common/layOut/Header";
import Sidebar from "../../../common/layOut/Sidebar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  const [open, setOpen] = useState(false);
  const data = [
    {
      name: "Dashboard",
      icon: "icon",
      url: "/admin/dashboard",
    },
    {
      name: "CraeateEmployee",
      icon: "icon",
      url: "adduser",
    },

    {
      name: "Register Complaints",
      icon: "icon",
      url: "addcomplaints",
    },
    {
      name: "All Complaints",
      icon: "icon",
      url: "allcomplaints",
    },
  ];

  return (
    <div>
      <div>
        <Header setOpen={setOpen} open={open} />
      </div>
      <div className="flex">
        {open && (
          <div className="">
            <Sidebar data={data} />
          </div>
        )}
        <div className="w-full  p-10 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
