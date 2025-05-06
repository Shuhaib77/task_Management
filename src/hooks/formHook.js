import { useFormik } from "formik";
import { login, register } from "../service/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addComplaints,
  editComplaints,
  pendingComplaints,
  solveComplaints,
} from "../../redux/complaintSlice";
import { createUser } from "../../redux/userSlice";

export const useForm = (
  initialValue,
  onsubmit,
  name,
  userId,
  complaintId,
  validationSchema
) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(complaintId, userId, "alllll");
  console.log(name, "nmaee");

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (name === "Register") {
        await register(values, navigate);
      } else if (name === "Add complaint") {
        await dispatch(addComplaints({ userId, values }));
      } else if (name === "create user") {
        await dispatch(createUser(values));
      } else if (name === "solve") {
        await dispatch(solveComplaints({ complaintId, values }));
        await dispatch(pendingComplaints(userId));
      } else if (name === "Edit complaint") {
        console.log("Editing complaint with values:", values);
        await dispatch(editComplaints({ complaintId, userId, values }));
      } else {
        await login(values, navigate);
      }

      if (onsubmit) {
        await onsubmit(values);
      }
    },
  });

  return formik;
};
