import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComplaints } from "../../../../../redux/complaintSlice";
import Modal from "../../../../common/components/modal/Modal";
import Button from "../../../../common/components/button/Button";
import { getUser } from "../../../../../redux/userSlice";

function AllComplaints() {
  const { data } = useSelector((state) => state.complaintData);
  const { userData } = useSelector((state) => state.userdata);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [complaintId, setComplaintId] = useState(null);
  const [selectedComplaintData, setSelectedComplaintData] = useState(null);

  useEffect(() => {
    dispatch(getComplaints());
    dispatch(getUser());
  }, [dispatch]);

  const fields = [
    { name: "complaint", type: "text" },
    { name: "type", type: "text" },
  ];

  const name = "Edit complaint";

  return (
    <div className="flex flex-col justify-center items-center h-[85vh] p-3">
      <h1 className="text-4xl font-bold mb-4">All Complaints</h1>

      <div className="w-full max-w-2xl h-[500px] shadow-md flex flex-col gap-y-2 p-5 overflow-y-auto">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              key={item._id}
              className="shadow-sm bg-blue-400 text-white rounded p-3"
            >
              <h1 className="font-semibold">Complaint: {item.complaint}</h1>
              <h1>Customer: {item.customerName}</h1>
              <h1>Status: {item.status}</h1>
              <Button
                name="Edit"
                className="bg-amber-50 text-black float-end rounded w-20"
                onClick={() => {
                  setComplaintId(item._id);
                  setSelectedComplaintData(item);
                  setOpen(true);
                }}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No complaints found.</p>
        )}
      </div>

      {open && (
        <Modal
          field={fields}
          setOpen={setOpen}
          open={open}
          complaintId={complaintId}
          complaintData={selectedComplaintData}
          users={userData}
          name={name}
        />
      )}
    </div>
  );
}

export default AllComplaints;
