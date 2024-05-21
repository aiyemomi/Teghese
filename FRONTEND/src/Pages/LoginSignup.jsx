import React, { useState, useEffect } from "react";
import "./CSS/LoginSignup.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { login, signUp } from "../services/api/auth";
const LoginSignup = () => {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);
  const [authAction, setAuthAction] = useState("login");

  const getInitialValues = () => {
    return authAction === "signup"
      ? { firstName: "", lastName: "", email: "", password: "" }
      : { email: "", password: "" };
  };

  const handleSubmit = async (values) => {
    try {
      const res =
        authAction === signUp ? await signUp(values) : await login(values);
      console.log(res);
    } catch (error) {
      alert(error.message || "Something Went Wrong");
    }
  };
  return (
    <div className="login-signup">
      <div className="login-signup-container">
        {authAction === "login" ? (
          <>
            <h1>LOGIN</h1>
            <p className="loginsignup-cta">
              Please enter your email and password
            </p>
          </>
        ) : (
          <>
            <h1>REGISTER</h1>
            <p className="loginsignup-cta">
              Please fill in the information below
            </p>
          </>
        )}

        <div className="login-signup-fields">
          <Formik
            key={authAction}
            enableReinitialize={true}
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={getInitialValues()}
            validate={(values) => {
              const errors = {};
              if (authAction === "signup") {
                if (!values.firstName) {
                  errors.firstName = "First name is required";
                }
                if (!values.lastName) {
                  errors.lastName = "Last name is required";
                }
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
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                handleSubmit(values);
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
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
                {authAction === "signup" && (
                  <>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={values.firstName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <ErrorMessage name="firstName" component="div" />
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={values.lastName}
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <ErrorMessage name="lastName" component="div" />
                  </>
                )}
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={values.email}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage name="email" component="div" />
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <ErrorMessage name="password" component="div" />
                <button type="submit" disabled={isSubmitting}>
                  Continue
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <p className="loginsignup-login">
          {authAction === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <span
            onClick={() => {
              authAction === "login"
                ? setAuthAction("signup")
                : setAuthAction("login");
              window.scrollTo(0, 0);
            }}
          >
            {authAction === "login" ? "Create one" : "Login here"}
          </span>
        </p>
        {authAction === "signup" && (
          <div className="loginsignup-agree">
            <input className="login-input-box" type="checkbox" name="agree" />

            <p>By continuing, I agree to the terms of use and privacy policy</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
