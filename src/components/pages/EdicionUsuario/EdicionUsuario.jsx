import React, { useEffect } from 'react'
import { Button, Col, Container, Form, Row, Image } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import instance from '../../../api/axiosUsuarios';
import logo from "../../../assets/img/logo/Imagen1.png";
import { regExpEmail } from '../../helpers/validateFields';
import Swal from 'sweetalert2';
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

const EdicionUsuario = (props) => {
  props.funcNav(true)

  const { id } = useParams()

  const navigate = useNavigate()

//   const volverTabla = navigate("/tablaUsuarios")
const getUsuariosID = async () => {
  try {
    const resp = await instance.get(`/users/${id}`);
    // setUsuarioEditar(resp.data)
    console.log((resp.data));
    formik.setFieldValue("name", resp.data.name, true);
    formik.setFieldValue("email", resp.data.email, true);
    formik.setFieldValue("password", resp.data.password, true);
    formik.setFieldValue("role", resp.data.role, true);
  } catch (error) {
    console.log(error);
    alert("Error")
  }
}

  useEffect(() => {
    getUsuariosID()

  }, [])
  useEffect(() => {
    props.funcNav(true)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(usuarioNameRef.current.value);
    // console.log(usuarioEmailRef.current.value);
    // console.log(usuarioPasswordRef.current.value);
    // console.log(usuarioRoleRef.current.value);

    if (
      !validateEmail(usuarioEmailRef.current.value) ||
      !validatePassword(usuarioPasswordRef.current.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'One or more fields are invalid!'
          })
      return
    };
    const user_token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${user_token}`,
      },
    }
      const newEdit = {
        name: values.name,
        email: values.email,
        role: values.role,
      };
      Swal.fire({
            title: 'Do you want to update this user?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Accept'
          }).then(async (result) => {
            if (result.isConfirmed) {
              try {
                const resp = await instance.put(`/users/${id}`,newEdit, config );
                if (resp.status === 200) {
                  Swal.fire(
                    'Update',
                    'The user was successfully updated.',
                    'success'
                  )
                  navigate(`/TablaUsuario`)
                }
              } catch (error) {
                console.log(error);
              }
            }
          });
    }
  })

  const getUsuariosID = async () => {
    try {
      const resp = await instance.get(`/users/${id}`);
      // setUsuarioEditar(resp.data)
      console.log((resp.data));
      formik.setFieldValue("name", resp.data.name, true);
      formik.setFieldValue("email", resp.data.email, true);
      formik.setFieldValue("password", resp.data.password, true);
      formik.setFieldValue("role", resp.data.role, true);
    } catch (error) {
      console.log(error);
      alert("Error")
    }
  }
}

  useEffect(() => {
    getUsuariosID()

  }, [])
  useEffect(() => {
    props.funcNav(true)
  }, [])



  return (
    <div>
      <Container className="py-5" >
        <h1 >Edit User</h1>
        <hr />
        <Row>
          <Col xs={12} md={6}>
            <Form className="my-2" noValidate onSubmit={formik.handleSubmit}>
              {/* nombre */}
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
            {/* email */}
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
            {/* password */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              disabled= {true}
              placeholder="Enter your password"
              name="password"
              maxLength={15}
              minLength={8}
              {...formik.getFieldProps("password")}
              className= {clsx(
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
            {/* role */}
            <Form.Group className="my-1" controlId="role">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  {...formik.getFieldProps("role")}
                  className={clsx(
                    "form-control",
                    {
                      "is-valid":
                        formik.touched.role &&
                        !formik.errors.role,
                    },
                    {
                      "is-invalid":
                        formik.touched.role &&
                        formik.errors.role,
                    }
                  )}
                >
                  <option value="">Select a category</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </Form.Select>
                {formik.touched.role &&
                  formik.errors.role && (
                    <div className="fv-plugins-message-container text-danger fw-bolder">
                      <span role="alert">
                        {formik.errors.role}
                      </span>
                    </div>
                  )}
              </Form.Group>
              <div className="text-center mt-3">
                <Button variant="warning" type='submit'>Update 🍻</Button>
                <Button variant="danger" className='mx-3' onClick={() => navigate(`/tablaUsuarios`)}>Go to Back 🡆</Button>
              </div>
            </Form>
          </Col>

          {/* Form Product */}
          <Col className="d-none d-md-block text-center">
            <Image src={logo} alt="logo" style={{maxWidth: '80%'}} />
          </Col>
        </Row>
      </Container>
    </div>
  )

export default EdicionUsuario