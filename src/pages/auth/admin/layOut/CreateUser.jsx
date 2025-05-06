import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../../hooks/formHook";
import Input from "../../../../common/components/input/Input";
import Button from "../../../../common/components/button/Button";

function CreateUser() {
  //   const { data } = useSelector((state) => state.userdata);

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch();
  //   }, []);

  //   console.log(data, "userress");
  const userId = sessionStorage.getItem("id");

  const field = [
    {
      name: "name",
      type: "text",
    },
    {
      name: "email",
      type: "text",
    },
    {
      name: "password",
      type: "text",
    },
    {
      name: "phone",
      type: "Number",
    },
  ];

  const select = [
    {
      name: "role",
      option: ["admin", "user"],
      type: "text",
    },
  ];

  const initialValue = {
    name: "",
    email: "",
    password: "",
    phone: Number,
    role: "",
  };
  const name = "create user";
  const formik = useForm(
    initialValue,
    (values) => console.log(values),
    name,
    userId
  );

  return (
    <div>
      <form
        className="grid grid-cols-1 gap-y-7 place-content-center place-items-center p-30 h-[85vh] "
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-4xl font-bold">{name}</h1>
        {field.map((item) => (
          <Input
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
            name="role"
            onChange={formik.handleChange}
            value={formik.values.role}
            className="bg-white border border-gray-300 rounded px-4 py-2 w-1/2"
          >
            <option value="">Select role</option>
            {select[0].option.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <Button
          type={"submit"}
          name={name}
          className={"bg-blue-500 text-white w-full"}
        />

        {console.log(formik.values)}
      </form>
    </div>
  );
}

export default CreateUser;
