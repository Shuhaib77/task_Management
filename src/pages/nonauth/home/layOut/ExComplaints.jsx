import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { exComplaints } from "../../../../../redux/complaintSlice";
import TaskView from "../card/TaskView";

function ExComplaints() {
  const { dataEx } = useSelector((state) => state.complaintData);
  const userId = sessionStorage.getItem("id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(exComplaints(userId));
  }, []);
  console.log(dataEx, "penddd");

  return (
    <>
      <TaskView data={dataEx} name={"Excrated Complaints"} />
    </>
  );
}

export default ExComplaints;
