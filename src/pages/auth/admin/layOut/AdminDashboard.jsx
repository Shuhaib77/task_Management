import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComplaints } from "../../../../../redux/complaintSlice";

function AdminDashboard() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.complaintData);

  useEffect(() => {
    dispatch(getComplaints());
  }, [dispatch]);

  return (
    <div className="p-6">
      <div className="shadow-sm bg-blue-400 h-[200px] text-white rounded p-3 mb-4">
        <h1 className="font-semibold">Total Complaints: {data.length}</h1>
      </div>
    </div>
  );
}

export default AdminDashboard;
