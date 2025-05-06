import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pendingComplaints } from "../../../../../redux/complaintSlice";
import Button from "../../../../common/components/button/Button";
import Modal from "../../../../common/components/modal/Modal";

function PendingComplaints() {
  const { dataPending } = useSelector((state) => state.complaintData);
  const userId = sessionStorage.getItem("id");
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [complaintId, setComplaintId] = useState(null);

  useEffect(() => {
    if (userId) {
      dispatch(pendingComplaints(userId));
    }
  }, [dispatch, userId]);

  const field = [{ name: "remark", type: "text" }];
  const select = [
    {
      name: "status",
      option: ["pending", "ex", "compleated"],
      type: "text",
    },
  ];

  const name = "solve";

  return (
    <div className="flex flex-col justify-center items-center h-[85vh] p-3">
      <h1 className="text-4xl font-bold mb-4">Pending Tasks</h1>

      <div className=" w-full max-w-2xl h-[500px] shadow-md flex flex-col gap-y-2 p-5 overflow-y-auto">
        {dataPending && dataPending.length > 0 ? (
          dataPending.map((item) => (
            <div
              key={item._id}
              className="shadow-sm bg-blue-400 text-white rounded p-3"
            >
              <h1 className="font-semibold">Complaint: {item.complaint}</h1>
              <h1>Customer: {item.customerName}</h1>
              <h1>Status: {item.status}</h1>
              <Button
                name="Solve"
                className="bg-amber-50 text-black float-end rounded w-20"
                onClick={() => {
                  setComplaintId(item._id);
                  setOpen(true);
                }}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">
            No pending complaints found.
          </p>
        )}
      </div>

      {open && (
        <Modal
          field={field}
          setOpen={setOpen}
          open={open}
          select={select}
          complaintId={complaintId}
          name={name}
        />
      )}
    </div>
  );
}

export default PendingComplaints;
