import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Formik, Field, Form as FormikForm, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginModal = ({ show, handleClose }) => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleSignup = () => {
    setIsSignup(!isSignup);
  };

  // Validation schema for login
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  // Validation schema for signup
  const signupValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{isSignup ? 'Hello there, please sign up to create your new journey' : 'Welcome back, please login'}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: isSignup ? '' : undefined,
          }}
          validationSchema={isSignup ? signupValidationSchema : loginValidationSchema}
          onSubmit={(values) => {
            console.log('Form values:', values);
          }}
        >
          {({ errors, touched }) => (
            <FormikForm>
              {isSignup && (
                <Form.Group controlId="formName" className="mt-3">
                  <Form.Label>Name</Form.Label>
                  <Field
                    name="name"
                    type="text"
                    className={`form-control ${errors.name && touched.name ? 'is-invalid' : ''}`}
                  />
                  <ErrorMessage name="name" component="div" className="invalid-feedback" />
                </Form.Group>
              )}

              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Field
                  name="email"
                  type="email"
                  className={`form-control ${errors.email && touched.email ? 'is-invalid' : ''}`}
                />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Field
                  name="password"
                  type="password"
                  className={`form-control ${errors.password && touched.password ? 'is-invalid' : ''}`}
                />
                <ErrorMessage name="password" component="div" className="invalid-feedback" />
              </Form.Group>

              {isSignup && (
                <Form.Group controlId="formConfirmPassword" className="mt-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    className={`form-control ${errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : ''}`}
                  />
                  <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                </Form.Group>
              )}

              <Button type="submit" variant="primary" className="mt-3">
                {isSignup ? 'Sign Up' : 'Login'}
              </Button>
            </FormikForm>
          )}
        </Formik>

        {!isSignup && (
          <div className="text-end mt-3">
            <Button variant="link" className="p-0">Forgot Password?</Button>
          </div>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={toggleSignup}>
          {isSignup ? 'Already have an account? Login' : 'New here? Sign Up'}
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;