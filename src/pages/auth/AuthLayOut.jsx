import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayOut() {
  return (
    <div className="flex justify-around h-screen items-center">
      <div className="w-1/2 h-full ">
        <img
          className="w-full h-full "
          src="https://plus.unsplash.com/premium_photo-1720192861639-1524439fc166?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9naW58ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
      <div className="w-1/3 ">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayOut;
