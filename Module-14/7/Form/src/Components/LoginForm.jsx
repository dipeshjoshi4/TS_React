import React from 'react'
import * as Yup from "yup";
import { ErrorMessage, Formik, Field } from "formik";

const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid Email Format")
        .required("Email is Required"),
    password: Yup.string()
        .min(6, "Password Must Be at least 6 Characters")
        .required("Password is required")
});

const LoginForm = () => {
    return (
        <div>
            <h2>Login Form</h2>

            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log("Login Data", values);
                    alert(`Logged in as ${values.email}`);
                    resetForm();
                }}
            >
                {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field type="email" name="email" placeholder="Enter Email" />
                            <ErrorMessage name="email" component="div" style={{ color: "red", fontSize: 12 }} />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" placeholder="Enter password" />
                            <ErrorMessage name="password" component="div" style={{ color: "red", fontSize: 12 }} />
                        </div>

                        <button type="submit" disabled={formik.isSubmitting || !formik.isValid}>
                            Login
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;
