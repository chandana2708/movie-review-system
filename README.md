import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schemas using Yup
const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const signupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const LoginModal = ({ show, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup

  const handleToggle = () => {
    setIsLogin(!isLogin); // Switch between login and signup
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {isLogin ? 'Welcome back, please login' : 'Hello there, please sign up'}<br />
          <span style={{ fontSize: '0.9rem' }}>to create your new journey</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isLogin ? (
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              console.log('Login Data:', values);
              onClose(); // Close modal on successful submit
            }}
          >
            {() => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <Field type="email" className="form-control" id="email" name="email" placeholder="Enter your email" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <Field type="password" className="form-control" id="password" name="password" placeholder="Enter your password" />
                  <ErrorMessage name="password" component="div" className="text-danger" />
                </div>
                <Button variant="primary" type="submit">
                  Login
                </Button>
                <div className="mt-3">
                  <a href="#" className="text-muted" style={{ fontSize: '0.9rem' }}>Forgot password?</a>
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          <Formik
            initialValues={{ email: '', password: '', confirmPassword: '' }}
            validationSchema={signupSchema}
            onSubmit={(values) => {
              console.log('Sign Up Data:', values);
              onClose(); // Close modal on successful submit
            }}
          >
            {() => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <Field type="email" className="form-control" id="email" name="email" placeholder="Enter your email" />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <Field type="password" className="form-control" id="password" name="password" placeholder="Create a password" />
                  <ErrorMessage name="password" component="div" className="text-danger" />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <Field type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" />
                  <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                </div>
                <Button variant="primary" type="submit">
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleToggle}>
          {isLogin ? 'No account? Sign Up' : 'Already have an account? Login'}
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;