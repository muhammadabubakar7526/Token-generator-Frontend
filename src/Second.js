import React from 'react';
import { useFormik } from 'formik';
import { LoginSchema } from './Validate';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: LoginSchema,
    onSubmit: values => {
      let errors = {};
      alert(JSON.stringify(values, null, 2));
      if(!values.firstName){
        errors.firstName = 'Required!'
       } 
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      {formik.errors.firstName && <div className="error">{formik.errors.firstName}</div>}
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default SignupForm;