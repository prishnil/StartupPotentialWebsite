import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import "./../Input/Input.css";
import { register } from "../../Services/register";
import "./Signup2.css";
import {Link} from "react-router-dom"


const signupSchema = Yup.object().shape({
    firstName: Yup.string()
    .min(4, "Name can not be less than 4")
    .required("Name can not be empty"),
    lastName: Yup.string()
    .min(4, "Name can not be less than 4")
    .required("Name can not be empty"),
    gender: Yup.string().required("Please select a gender"),
    city: Yup.string().required("City cannot be empy"),
    state: Yup.string().required("State cannot be empy"),
    country: Yup.string().required("Country cannot be empy"),
    age: Yup.number()
    .min(1, "Age can not be less than 1")
    .required("Age can not be empty"),
  });

  const Signup2 = () => {
    const signup = async values => {
      try {
        const response = await register(values);
  
      
        localStorage.setItem("jwt", response.data);
  
  
      
      } catch (error) {
        if (error.response && error.response.status === 400) {
          return (
            <h1>HTTP_NOT_FOUND</h1>
          )
        }
      }
    };

  
    return (
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          gender: "",
          city: "",
          state: "",
          country: "",
          age: ""  
        }}
        validationSchema={signupSchema}
        onSubmit={signup}
      >
        {({ touched, errors }) => (
          <div className = "Signup2">
            <h1 className="Signup2__title">Basic Information</h1>
            <p className = 'Signup2__intro'>
            Your information will be shared with our team 
            so we can complete your profile!
            </p>
            <Form className="Signup2__container">
                <p className = 'Signup2__first'>First Name</p>
              <Field
                name="firstName"
                type="text"
                placeholder="First Name"
                className= "Signup2__firstbox"
                autoComplete="off"
              />
              <span className="error">
                {errors.firstName && touched.firstName ? errors.firstName : null}
              </span>

              <p className = 'Signup2__last'>Last Name</p>

              <Field
                name="lastName"
                type="text"
                placeholder="Last Name"
                className= "Signup2__lastbox"
              />
              <span className="error">
                {errors.lastName && touched.lastName ? errors.lastName : null}
              </span>
          
              <p className = 'Signup2__age'>Age</p>
              <Field
                name="age"
                type = "number"
                placeholder="Age"
                className= "Signup2__agebox"
              />
              <span className="error">
                {errors.age && touched.age ? errors.age : null}
              </span>
                
  
              <p className = 'Signup2__address'>Address</p>
              <Field
              name="country"
              type="text"
              placeholder="Country"
              className= "Signup2__country"
              autoComplete="off"
              />
              <span className="error">
              {errors.country && touched.country ? errors.country : null}
              </span>

              <Field
              name="state"
              type="text"
              placeholder="State"
              className= "Signup2__state"
              autoComplete="off"
              />
              <span className="error">
              {errors.state && touched.state ? errors.state : null}
              </span>

            <Field
              name="city"
              type="text"
              placeholder="City"
              className= "Signup2__city"
              autoComplete="off"
              />
              <span className="error">
              {errors.city && touched.city ? errors.city : null}
              </span>

  
              <p className = 'Signup2__gender'>Gender</p>

              <Field name="gender" as="select" className = "Signup2__genderbox">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">other</option>
              </Field>
              <span className="error">
                {errors.gender && touched.gender ? errors.gender : null}
              </span>
  
              <div className="Signup2__button" type="submit">
              <Link to = '/Verify' class="Signup2__text">Continue</Link>
            </div>
            </Form>
          </div>
        )}
      </Formik>
    );
};
  
export default Signup2
  