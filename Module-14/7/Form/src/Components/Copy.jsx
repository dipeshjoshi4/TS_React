

import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup"


const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid Email Format")
        .required("Email is Required"),
    password: Yup.string()
        .min(6, "password must be 6 charcter or more")
        .required("password is required ")
})

const Copy = () => {
    return (
        <div>
            <h2>Form Login</h2>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log("Login Data", values);
                    alert(`${values.email} is logged In`)
                    resetForm()
                }}
            >



                {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" placholder="Enter Email" />
                            <ErrorMessage name="email" component="div" style={{ color: "red", fontSize: 12 }} />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <Field name="password" type="password" placholder="Enter password" />
                            <ErrorMessage name="password" component="div" style={{ color: "red", fontSize: 12 }} />
                        </div>

                        <button type="submit" disabled={formik.isSubmitting || !formik.isValid}>Login</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default Copy