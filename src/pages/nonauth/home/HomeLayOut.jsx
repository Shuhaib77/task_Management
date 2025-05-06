import React, { useState } from "react";
import Sidebar from "../../../common/layOut/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../../../common/layOut/Header";

function HomeLayOut() {
  const [open, setOpen] = useState(false);
  const data = [
    {
      name: "Dashboard",
      icon: "icon",
      url: "/home",
    },
    {
      name: "pending complaints",
      icon: "icon",
      url: "pendings",
    },
    {
      name: "ex Complaints",
      icon: "icon",
      url: "excomplaint",
    },
    {
      name: "compleated Complaints",
      icon: "icon",
      url: "closeComplaints",
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

export default HomeLayOut;
