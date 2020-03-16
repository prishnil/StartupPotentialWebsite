import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {Link } from "react-router-dom"
import { login } from "../../Services/auth";
import logo from '../Login/logo.png'
import leaf from '../Login/leaf.png'
import "./Login.css";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("invalid email")
    .required("email can not be empty"),
  password: Yup.string()
    .required("password can not be empty")
    .min(6, "password can not be less than 6")
});

const Login = () => {
  const login = async values => {
    try {
      const { email, password } = values;

      await login(email, password);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        return (
          <h1>HTTP_NOT_FOUND</h1>
        )      }
    }
  
  };

  return (
    <div className = "Login">
      <img src = {logo} className = "Login__logo" alt = "Logo" />
      <img src = {leaf} className = "Login__leaf" alt = "Leaf" />
      <h3 className="Login__title">Welcome Back, *insert emoji*!</h3>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema}
        onSubmit={login}
      >
        {({ errors, touched }) => (
          
          <Form className="Login__container">

            <p className = "Login__email">Email</p>
              <Field
              name="email"
              type="email"
              placeholder= "Email"
              className= "Login__emailbox"
              autoComplete="off"
              />
              <span className="error">
                {errors.email && touched.email ? errors.email : null}
              </span>



            <p className = "Login__password">Password</p>
              <Field
              name="password"
              type="password"
              placeholder="Password"
              className= "Login__passbox"
              autoComplete="off"
              />
              <span className="error">
                {errors.password && touched.password ? errors.password : null}
              </span>


            <div className="Login__btn" type="submit">
              <Link to = '/Dashboard' class="Login__text">Login</Link>
            </div>

            <a href="" className="Login__pass">Forgot Password?</a>
            <div className = "Login__bottom">
              <p className = "Login__account">Don't have an account? </p>
              <a href="" className="Login__sign">Sign Up</a>
            </div>

          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
