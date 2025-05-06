import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  compleatedComplaints,
  exComplaints,
  pendingComplaints,
} from "../../../../../redux/complaintSlice";

function UserDashboard() {
  const dispatch = useDispatch();
  const userId = sessionStorage.getItem("id");
  const { dataPending, dataEx, dataCompleated } = useSelector(
    (state) => state.complaintData
  );

  useEffect(() => {
    if (userId) {
      dispatch(pendingComplaints(userId));
      dispatch(exComplaints(userId));
      dispatch(compleatedComplaints(userId));
    }
  }, [dispatch, userId]);

  return (
    <div className="p-6">
      <div className="shadow-sm bg-blue-400 text-white rounded p-3 mb-4">
        <h1 className="font-semibold">
          Pending Complaints: {dataPending.length}
        </h1>
      </div>
      <div className="shadow-sm bg-green-400 text-white rounded p-3 mb-4">
        <h1 className="font-semibold">Escalated Complaints: {dataEx.length}</h1>
      </div>
      <div className="shadow-sm bg-purple-400 text-white rounded p-3 mb-4">
        <h1 className="font-semibold">
          Completed Complaints: {dataCompleated.length}
        </h1>
      </div>
    </div>
  );
}

export default UserDashboard;
