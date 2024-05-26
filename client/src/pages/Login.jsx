import React, { useState, useEffect, useContext } from "react";
import "./CSS/LoginSignup.css";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { AuthContext } from "../context/AuthContext";
const Login = () => {
  const [initialValues, setInitialValues] = useState({
    email: "",
    password: "",
  });
  const { currentUser, userLogin } = useContext(AuthContext);
  //   console.log(currentUser);
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  const navigate = useNavigate();

  const handleCustomErrors = (error, setErrors) => {
    const errors = {};
    if (
      error.response?.status === 404 ||
      error.response?.data.message.includes("Username")
    ) {
      errors.email = "Invalid email address";
    } else if (
      error.response?.status === 400 ||
      error.response.data.message.includes("Password")
    ) {
      errors.password = "Incorrect password. Please try again.";
    }
    setErrors(errors);
  };
  const handleSubmit = async (values, { setErrors }) => {
    try {
      const res = await userLogin(values);
      console.log(res);
      console.log(res.status);
      if (res.status >= 200 && res.status < 300) {
        // console.log(res);
        navigate("/");
      }
    } catch (error) {
      console.log(error.response);
      handleCustomErrors(error, setErrors);
      console.error(error.response?.data?.message);
    }
  };
  return (
    <div className="login-signup">
      <div className="login-signup-container">
        <h1>LOGIN</h1>
        <p className="loginsignup-cta">Please enter your email and password</p>

        <div className="login-signup-fields">
          <Formik
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={initialValues}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Email is required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Password is required";
              }
              return errors;
            }}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isSubmitting,
            }) => (
              <Form>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                />
                <ErrorMessage name="email" component="div" />
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  minLength="4"
                  autoComplete="current-password"
                />
                <ErrorMessage name="password" component="div" />
                <button type="submit">Continue</button>
              </Form>
            )}
          </Formik>
        </div>
        <p className="loginsignup-login">
          Don't have an account?
          <span>
            <Link to={"/register"} style={{ all: "unset" }}>
              Create one
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
