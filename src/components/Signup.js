import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';


export const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
      
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        alert(`Great, we've created an account for ${values.firstName}`);
        console.log(`${values.firstName},${values.lastName},${values.email}`);
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Create Your Account</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <button className="btn btn-dark mt-3" type="submit">Register</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
