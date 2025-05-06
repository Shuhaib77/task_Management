import React from "react";
import Input from "../../../common/components/input/Input";
import { useNavigate } from "react-router-dom";
import Button from "../../../common/components/button/Button";
import { useForm } from "../../../hooks/formHook";
import { registerSchema } from "../../../utils/registerSchema";
import { loginschema } from "../../../utils/loginSchema";

function Auth({ name }) {
  const navigate = useNavigate();
  const filed = [
    {
      name: "email",
      type: "text",
    },
    {
      name: "password",
      type: "text",
    },
  ];
  const validationSchema = "Register" ? registerSchema : loginschema;
  const initialValues = { email: "", password: "" };
  const formik = useForm(
    initialValues,
    (values) => {
      console.log(formik.values);
    },
    name,
    validationSchema
  );

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 gap-y-3 "
      >
        <h1 className="text-2xl text-gray-700 font-semibold ">{name}</h1>
        {filed.map((item, i) => (
          <Input
            placeholder={item.name}
            key={i + 1}
            type={item.type}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            name={item.name}
            value={formik.values[item.name]}
            errors={formik.errors}
          />
        ))}
        <Button
          name={"submit"}
          type={"submit"}
          className={
            name === "Register"
              ? "bg-green-700 text-white"
              : "bg-blue-500 text-white"
          }
        />

        <h1 className=" cursor-pointer text-blue-800 underline   ">
          {" "}
          {name === "Login" ? (
            <h1
              onClick={() => {
                navigate("/register");
              }}
              className=""
            >
              {" "}
              register?
            </h1>
          ) : (
            <h1
              className=""
              onClick={() => {
                navigate("/");
              }}
            >
              {" "}
              Login?
            </h1>
          )}
        </h1>
      </form>
      {console.log(formik.values)}
    </div>
  );
}

export default Auth;
