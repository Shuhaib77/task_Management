import React, { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import { useForm } from "../../../hooks/formHook";

const Modal = ({
  setOpen,
  open,
  field,
  select,
  complaintId,
  complaintData,
  users,
  name
}) => {
  const onClose = () => setOpen(false);
  const [usersId, setUsersId] = useState("");

  const userId = select ? sessionStorage.getItem("id") : usersId;

  const initialValue = name==="Edit complaint"? {
    complaint: complaintData?.complaint || "",
    type: complaintData?.type || "",
    user: complaintData?.user || "",
  
  }:{
    remark:"",
    status:""
  }
  const formik = useForm(
    initialValue,
    async (values) => {
      console.log("Form submitted with values:", values);
      setOpen(false);
    },
    name,
    userId,
    complaintId
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-600 hover:text-black"
        >
        </button>
        <h2 className="text-xl font-bold mb-4">Edit Complaint</h2>

        <form
          className="grid grid-cols-1 gap-y-3"
          onSubmit={formik.handleSubmit}
        >
          {field.map((item) => (
            <Input
              key={item.name}
              placeholder={item.name}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              value={formik.values[item.name]}
              name={item.name}
              errors={formik.errors}
              className="bg-white"
            />
          ))}
          {select ? (
            <div className="w-full">
              <select
                name="status"
                onChange={formik.handleChange}
                value={formik.values.status}
                className="bg-white border border-gray-300 rounded px-4 py-2 w-full"
              >
                <option value="">Select status</option>
                {select[0].option.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="w-full mt-3">
              <label
                htmlFor="assignedUser"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Assign To User
              </label>
              <select
                id="user"
                name="user"
                onChange={(e) => {
                  formik.handleChange(e);
                  setUsersId(e.target.value);
                }}
                value={formik.values.assignedUser}
                className="bg-white border border-gray-300 rounded px-4 py-2 w-full"
              >
                <option value="">Select User</option>
                {users?.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="flex gap-x-2 mt-4">
            <Button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              name={name}
              type="submit"
            />
            <Button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
              name="Close"
              type="button"
            />
          </div>
        </form>
      </div>
      {  console.log(formik.values,"lll")
  }
    </div>
  );
};

export default Modal;
