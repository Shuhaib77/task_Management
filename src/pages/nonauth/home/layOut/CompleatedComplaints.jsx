import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { compleatedComplaints } from "../../../../../redux/complaintSlice";
import TaskView from "../card/TaskView";

function CompleatedComplaints() {
  const { dataCompleated } = useSelector((state) => state.complaintData);
  const userId = sessionStorage.getItem("id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(compleatedComplaints(userId));
  }, []);
  console.log(dataCompleated, "penddd");
  return (
    <>
      <TaskView data={dataCompleated} name={"Compleated Complaints"} />
    </>
  );
}

export default CompleatedComplaints;
