import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Image } from "react-bootstrap";
import logo from "../../assets/img/logo/Imagen1.png";
import facebook from "../../assets/img/social-icons/facebook-logo.webp";
import google from "../../assets/img/social-icons/google-logo.png";
import instance from "../../api/axiosUsuarios";
import { regExpEmail, regExpPassword } from "../helpers/validateFields";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

const Registro = ({ show, handleClose }) => {


  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(8, "Minimum 8 characters")
      .max(50, "Maximum 50 characters")
      .trim()
      .required("Name is required"),
    email: Yup.string()
      .min(8, "Minimum 8 characters")
      .max(50, "Maximum 50 characters")
      .matches(
        regExpEmail,
        "Invalid format, remember the example example@gmail.com "
      )
      .trim()
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Minimum 8 characters")
      .max(100, "Maximum 15 characters")
      .required ("The password is requiered")
      .matches(
        regExpPassword,
        "It must have a capital letter, a lower case letter and a number"
      )
      .trim()
      .required("The password is required"),
    confirmPassword: Yup.string()
      .min(8, "Minimum 8 characters")
      .max(15, "Maximum 15 characters")
      .oneOf([Yup.ref("password")], "Passwords must be the same")
      .required("Password confirmation is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const formik = useFormik({
    validationSchema: RegisterSchema,
    initialValues,
    validateOnChange: true,
    onSubmit: async (values) => {
        Swal.fire({
            title: 'Creating...!',
            allowEscapeKey: false,
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
              Swal.showLoading()
            },
          })
      const newRegister = {
        name: values.name,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      };
      try {
        const res = await instance.post("/auth/register", newRegister);
        Swal.close();
        handleClose();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error?.response?.msg ? error?.response?.msg : "error",
        });
        console.log(error);
      }
    },
  });
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>
            <Image src={logo} alt="logo" width="40" />
            Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Juan Castro"
                name="name"
                maxLength={50}
                minLength={8}
                {...formik.getFieldProps("name")}
                className={clsx(
                  "form-control",
                  {
                    "is-valid": formik.touched.name && !formik.errors.name,
                  },
                  {
                    "is-invalid": formik.touched.name && formik.errors.name,
                  }
                )}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="fv-plugins-message-container text-danger fw-bolder">
                  <span role="alert">{formik.errors.name}</span>
                </div>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@gmail.com"
              name="email"
              maxLength={50}
              minLength={8}
              {...formik.getFieldProps("email")}
              className={clsx(
                "form-control",
                {
                  "is-valid": formik.touched.email && !formik.errors.email,
                },
                {
                  "is-invalid": formik.touched.email && formik.errors.email,
                }
              )}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="fv-plugins-message-container text-danger fw-bolder">
                <span role="alert">{formik.errors.email}</span>
              </div>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              maxLength={15}
              minLength={8}
              {...formik.getFieldProps("password")}
              className={clsx(
                "form-control",
                {
                  "is-valid": formik.touched.password && !formik.errors.password,
                },
                {
                  "is-invalid": formik.touched.password && formik.errors.password,
                }
              )}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="fv-plugins-message-container text-danger fw-bolder">
                <span role="alert">{formik.errors.password}</span>
              </div>
            )}
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              maxLength={15}
              minLength={8}
              {...formik.getFieldProps("confirmPassword")}
              className={clsx(
                "form-control",
                {
                  "is-valid": formik.touched.confirmPassword && !formik.errors.confirmPassword,
                },
                {
                  "is-invalid": formik.touched.confirmPassword && formik.errors.confirmPassword,
                }
              )}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <div className="fv-plugins-message-container text-danger fw-bolder">
                <span role="alert">{formik.errors.confirmPassword}</span>
              </div>
            )}
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="warning" type="submit">
              Send
            </Button>
          </div>
          </Form>
          <div className="container my-3 w-100">
            <div className="row text-center">
              <h3 className="col-12">Sign in with</h3>
            </div>
            <div className="row justify-content-center">
              <div className="d-flex">
                <Button variant="outline-info" className=" w-100 my-1 mx-2">
                  <a
                    href="https://www.facebook.com/login/"
                    className="text-decoration-none text-dark"
                    target="_blank"
                  >
                    <div className=" row align-content-center">
                      {/* <!--Row para alinear img y texto--> */}
                      <div className="col-2 d-none d-md-block">
                        <Image
                          src={facebook}
                          className="mx-3"
                          width="30"
                          alt="facebook"
                        />
                      </div>
                      <div className="col-12 col-md-10 text-center font-weight-bolder">
                        Facebook
                      </div>
                    </div>
                  </a>
                </Button>
                {/* <!--Final de Primer Boton--> */}

                <Button variant="outline-warning" className=" w-100 my-1 mx-2">
                  <a
                    href="https://www.google.com/"
                    className="text-decoration-none text-dark"
                    target="_blank"
                  >
                    <div className=" row align-content-center">
                      {/* <!--Row para alinear img y texto--> */}
                      <div className="col-2 d-none d-md-block">
                        <Image
                          src={google}
                          className="mx-3"
                          width="30"
                          alt="google"
                        />
                      </div>
                      <div className="col-12 col-md-10 text-center font-weight-bolder">
                        Google
                      </div>
                    </div>
                  </a>
                </Button>
                {/* <!--Final de Segundo Boton--> */}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Registro;
