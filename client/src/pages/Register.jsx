import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CSS/LoginSignup.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { signUp } from "../services/api/auth";
import * as Yup from "yup";

const Register = () => {
  const [initialValues, setInitialValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const validationSchema = Yup.object({
    password: Yup.string().matches(
      /^\S*$/,
      "Password should not contain any spaces"
    ),
  });
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);
  const navigate = useNavigate();

  const handleSubmit = async (values, { setErrors }) => {
    try {
      const res = await signUp(values);
      if (res.status >= 200 && res.status < 300) {
        console.log(res);
        navigate("/login");
      }
    } catch (error) {
      handleCustomErrors(error, setErrors);
    }
  };

  const handleCustomErrors = (error, setErrors) => {
    const errors = {};
    if (
      error.response?.status === 400 ||
      error.response.data.message.includes("Email")
    ) {
      errors.email = "The email address already exists";
    }
    setErrors(errors);
  };
  return (
    <div className="login-signup">
      <div className="login-signup-container">
        <h1>REGISTER</h1>
        <p className="loginsignup-cta">Please fill in the information below</p>

        <div className="login-signup-fields">
          <Formik
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={initialValues}
            validationSchema={validationSchema}
            validate={(values) => {
              const errors = {};

              if (!values.firstName) {
                errors.firstName = "First name is required";
              }
              if (!values.lastName) {
                errors.lastName = "Last name is required";
              }

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
                <>
                  <Field
                    required
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    value={values.firstName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="firstName" component="div" />
                  <Field
                    required
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    value={values.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="lastName" component="div" />
                </>
                <Field
                  required
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />

                <ErrorMessage name="email" component="div" />
                <Field
                  required
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  minLength="4"
                />
                <ErrorMessage name="password" component="div" />

                <div className="loginsignup-agree">
                  <input
                    required
                    className="login-input-box"
                    type="checkbox"
                    name="agree"
                  />
                  <p>
                    By continuing, I agree to the terms of use and privacy
                    policy
                  </p>
                </div>
                <button type="submit">Continue</button>
              </Form>
            )}
          </Formik>
        </div>
        <p className="loginsignup-login">
          Already have an account?
          <span>
            <Link to={"/login"} style={{ all: "unset" }}>
              Login here
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
