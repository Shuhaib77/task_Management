import React, { useEffect, useState } from "react";
import Input from "../../../../common/components/input/Input";
import { useForm } from "../../../../hooks/formHook";
import Button from "../../../../common/components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../../../redux/userSlice";

function AddComplaints() {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.userdata);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const field = [
    {
      name: "complaint",
      type: "text",
    },
    {
      name: "type",
      type: "text",
    },
  ];

  const name = "Add complaint";
  const initialValue = { complaint: "", type: "", customerName: "" };

  const formik = useForm(
    initialValue,
    (values) => {
      console.log("Form submitted with values:", values);
      console.log("Selected user ID:", userId);
    },
    name,
    userId
  );

  return (
    <form
      className="grid grid-cols-1 gap-y-7 place-content-center place-items-center p-30 h-[85vh]"
      onSubmit={formik.handleSubmit}
    >
      <h1 className="text-4xl font-bold">{name}</h1>
      {field.map((item) => (
        <Input
          key={item.name}
          placeholder={item.name}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values[item.name]}
          name={item.name}
          errors={formik.errors}
          className={"bg-white"}
        />
      ))}
      <div className="w-full">
        <select
          name="customerName"
          onChange={(e) => {
            const selectedName = e.target.value;
            const selectedUser = userData.find(
              (item) => item.name === selectedName
            );
            setUserId(selectedUser?._id || "");
            formik.handleChange(e);
          }}
          value={formik.values.customerName}
          className="bg-white border border-gray-300 rounded px-4 py-2 w-1/2"
        >
          <option value="">Select Customer</option>
          {userData?.map((item, i) => (
            <option key={i} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <Button
        type="submit"
        name={name}
        className="bg-blue-500 text-white w-full"
      />
    </form>
  );
}

export default AddComplaints;
