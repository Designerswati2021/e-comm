import Styles from "../styles/contact.module.css";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

function Contact() {
  const validateSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("This email is required"),
    password: Yup.string().required("Password is required"),
  });

  const validateForm = (values, { setSubmitting }) => {
    console.log(values);
  };

  return (
    <>
      <div className="container">
        <div class="row">
          <h2 className="fs-20 text-center text-uppercase p-4 text-white">
            Contact Us
          </h2>
          <div className="col-md-6">
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={validateForm}
              validationSchema={validateSchema}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    value={values.email}
                  />
                  <span className="text-danger">
                    {errors.email && errors.email}
                  </span>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    value={values.password}
                  />
                  <span className="text-danger">
                    {errors.password && errors.password}
                  </span>
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </form>
              )}
            </Formik>
          </div>
          <div className="col-md-6">
            <img
              src="https://thewingshield.com/assets/img/login.png"
              className={Styles.contactimg}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
