import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Image } from "react-bootstrap";
import logo from "../../assets/img/logo/Imagen1.png";
import facebook from "../../assets/img/social-icons/facebook-logo.webp";
import google from "../../assets/img/social-icons/google-logo.png";
import { Link } from "react-router-dom";
import Registro from "../../components/Registro/Registro";
import instance from "../../api/axiosUsuarios";
import Swal from "sweetalert2";
import { regExpEmail, regExpPassword} from "../helpers/validateFields";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

const Login = ({ show, handleClose, setUserDate }) => {
  const [reg, setReg] = useState(false);
  const handleCloses = () => setReg(false);
  const handleShow = () => setReg(true);
  const [isDisabled, setIsDisabled] = useState(false)

  const LoginSchema = Yup.object().shape({
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
      .max(15, "Maximum 15 characters")
      .matches(regExpPassword, "It must have a capital letter, a lower case letter and a number")
      .trim()
      .required("The password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    validationSchema: LoginSchema,
    initialValues,
    validateOnChange: true,
    onSubmit: async (values) => {
      const newLogin = {
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
      };
      try {
        const res = await instance.post("/auth/login", newLogin);
        const user_token = res.data.token;
        localStorage.setItem("token", JSON.stringify(user_token));
        setUserDate(user_token);
        Swal.fire({
          icon: "success",
          title: "Welcome!",
          text: "Now you are logged!",
        });
        setTimeout(() => {
          handleClose();
         
        }, 500);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email or password incorrects!",
        });
        console.log(error);
        setIsDisabled(false);
      }
    },
  });

  // const disabledButton = () => {
  //   setIsDisabled(true)
  // }

  return (
    <Modal show={show} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title className="d-flex">
          <Image src={logo} alt="logo" width="40" />
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate onSubmit={formik.handleSubmit}>
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
              maxLength={16}
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
          <div className="d-grid gap-2">
            <Button variant="warning" type="submit" disabled={isDisabled}>
              Sign in
            </Button>
          </div>
        </Form>

        <div className="d-flex justify-content-between my-3">
          <div>
            <span>
              <Link
                to="/recpassword"
                data-toggle="modal"
                data-target="#exampleModal"
                className="font-weight-bold text-decoration-none"
                onClick={handleClose}
              >
                Recover password
              </Link>
            </span>
          </div>
          <div>
            <span>
              Don't have an account?{" "}
              <Link
                to="/"
                data-toggle="modal"
                data-target="#exampleModal"
                className="font-weight-bold text-decoration-none"
                onClick={handleShow}
              >
                sign up
              </Link>
              <Registro show={reg} handleClose={handleCloses} />
            </span>
          </div>
        </div>

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
              <Button variant="outline-warning" className=" w-100 my-1 mx-2">
                <a
                  href="https://www.google.com/"
                  className="text-decoration-none text-dark"
                  target="_blank"
                >
                  <div className=" row align-content-center">
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
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Login;
