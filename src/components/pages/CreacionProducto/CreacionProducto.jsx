import React, { useState } from "react";
import { Col, Container, Form, Row, Button, Image } from "react-bootstrap";
import Swal from "sweetalert2";
import logo from "../../../assets/img/logo/Imagen1.png";
import { regExpPorcentaje, regExpProductName } from "../../helpers/validateFields";
import instance from "../../../api/axiosUsuarios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";

const CreacionProducto = () => {
  const navigate = useNavigate();
  const ProductSchema = Yup.object().shape({
    nombreProducto: Yup.string()
      .min(3, "Minimo 3 caracteres")
      .max(50, "Maximo 50 caracteres")
      .matches(regExpProductName, "Fomato invalido")
      .trim()
      .required("El nombre del prodcuto es requerido"),
    detalleProducto: Yup.string()
      .min(3, "Minimo 3 caracteres")
      .max(100, "Maximo 50 caracteres")
      .matches(regExpProductName, "Fomato invalido")
      .trim()
      .required("El detalle del prodcuto es requerido"),
    precioProducto: Yup.number()
      .min(0, "Minimo 0")
      .max(9999, "Maximo 4")
      .required("El precio es requerido"),
    urlProducto: Yup.string()
      .url("Formato invalido")
      .required("La URL es requerida"),
    categoriaProducto: Yup.string()
      .min(2, "Minimo 2 caracteres")
      .max(30, "Maximo 3 caracteres")
      .trim()
      .required("La categoria es requerida"),
    graduacionProducto: Yup.string()
      .min(2, "Minimo 2 caracteres")
      .max(3, "Maximo 4 caracteres")
      .matches(regExpPorcentaje,"Debe ser porcentaje")
      .trim()
      .required("La graduacion es requerida"),
    disponibilidadProducto: Yup.boolean().required("La disponibilidad es requerida"),
  });
  const initialValues = {
    nombreProducto: "",
    detalleProducto: "",
    precioProducto: "",
    urlProducto: "",
    categoriaProducto: "",
    graduacionProducto: "",
    disponibilidadProducto: "",
  };
  const formik = useFormik({
    validationSchema: ProductSchema,
    initialValues,
    validateOnChange: true,
    onSubmit: async (values) => {
      console.log("Entro en el submit");
      const newProducto = {
        ProductName: values.nombreProducto,
        Productdetalle: values.detalleProducto,
        PriceProduct: values.precioProducto,
        ImgURL: values.urlProducto,
        Category: values.categoriaProducto,
        Graduation: values.graduacionProducto,
        Avaliable: values.disponibilidadProducto,
      };
      console.log(newProducto);
      Swal.fire({
        title: "Do you want to create this product?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Accept",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const resp = await instance.post("/productos/", newProducto);

            if (resp.status === 200) {
              Swal.fire(
                "Created!",
                "The product was created correctly.",
                "success"
              );

              navigate(`/tablaproducto`);
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    },
  });

  return (
    <div>
      <Container className="py-5">
        <h1>Create Product</h1>
        <hr />
        <Row>
          <Col lg={6}>
            {/* Form Product */}
            <Form className="my-2" noValidate onSubmit={formik.handleSubmit}>
              <Form.Group className="my-1 " controlId="nombrerProducto">
                <Form.Label>Product</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej:Ipa"
                  maxLength={50}
                  minLength={1}
                  {...formik.getFieldProps("nombreProducto")}
                  className={clsx(
                    "form-control",
                    {
                      "is-valid":
                        formik.touched.nombreProducto &&
                        !formik.errors.nombreProducto,
                    },
                    {
                      "is-invalid":
                        formik.touched.nombreProducto &&
                        formik.errors.nombreProducto,
                    }
                  )}
                />
                {/* mensaje debajo del input */}
                {formik.touched.nombreProducto &&
                  formik.errors.nombreProducto && (
                    <div className="fv-plugins-message-container text-danger fw-bolder">
                      <span role="alert">{formik.errors.nombreProducto}</span>
                    </div>
                  )}
              </Form.Group>
              <Form.Group className="my-1" controlId="detalleProducto">
                <Form.Label>Details</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Cerveza Aromatizada con caramelo"
                  maxLength={100}
                  minLength={10}
                  {...formik.getFieldProps("detalleProducto")}
                  className={clsx(
                    "form-control",
                    {
                      "is-valid":
                        formik.touched.detalleProducto &&
                        !formik.errors.detalleProducto,
                    },
                    {
                      "is-invalid":
                        formik.touched.detalleProducto &&
                        formik.errors.detalleProducto,
                    }
                  )}
                />
                {formik.touched.detalleProducto &&
                  formik.errors.detalleProducto && (
                    <div className="fv-plugins-message-container text-danger fw-bolder">
                      <span role="alert">{formik.errors.detalleProducto}</span>
                    </div>
                  )}
              </Form.Group>
              <Form.Group className="my-1" controlId="precioProducto">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ej: 250"
                  {...formik.getFieldProps("precioProducto")}
                  className={clsx(
                    "form-control",
                    {
                      "is-valid":
                        formik.touched.precioProducto &&
                        !formik.errors.precioProducto,
                    },
                    {
                      "is-invalid":
                        formik.touched.precioProducto &&
                        formik.errors.precioProducto,
                    }
                  )}
                />
                 {formik.touched.precioProducto &&
                  formik.errors.precioProducto && (
                    <div className="fv-plugins-message-container text-danger fw-bolder">
                      <span role="alert">{formik.errors.precioProducto}</span>
                    </div>
                  )}
              </Form.Group>
              <Form.Group className="my-1" controlId="urlProducto">
                <Form.Label>Imagen URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: https://www.tubirra.com"
                  {...formik.getFieldProps("urlProducto")}
                  className={clsx(
                    "form-control",
                    {
                      "is-valid":
                        formik.touched.urlProducto &&
                        !formik.errors.urlProducto,
                    },
                    {
                      "is-invalid":
                        formik.touched.urlProducto && formik.errors.urlProducto,
                    }
                  )}
                />
                 {formik.touched.urlProducto && formik.errors.urlProducto && (
                  <div className="fv-plugins-message-container text-danger fw-bolder">
                    <span role="alert">{formik.errors.urlProducto}</span>
                  </div>
                )}
              </Form.Group>
              <Form.Group className="my-1" controlId="categoriaProducto">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  {...formik.getFieldProps("categoriaProducto")}
                  className={clsx(
                    "form-control",
                    {
                      "is-valid":
                        formik.touched.categoriaProducto &&
                        !formik.errors.categoriaProducto,
                    },
                    {
                      "is-invalid":
                        formik.touched.categoriaProducto &&
                        formik.errors.categoriaProducto,
                    }
                  )}
                >
                  <option value="">Select a category</option>
                  <option value="Cerveza">Beer</option>
                  <option value="Cocteleria">Cocktail</option>
                  <option value="Merchandising">Merchandising</option>
                  <option value="comidas">Foods</option>
                  <option value="Otros">Others</option>
                </Form.Select>
                {formik.touched.categoriaProducto &&
                  formik.errors.categoriaProducto && (
                    <div className="fv-plugins-message-container text-danger fw-bolder">
                      <span role="alert">
                        {formik.errors.categoriaProducto}
                      </span>
                    </div>
                  )}
              </Form.Group>
              <Form.Group className="my-1" controlId="Graducaion">
                <Form.Label>Graduation</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: 5 "
                  {...formik.getFieldProps("graduacionProducto")}
                  className={clsx(
                    "form-control",
                    {
                      "is-valid":
                        formik.touched.graduacionProducto &&
                        !formik.errors.graduacionProducto,
                    },
                    {
                      "is-invalid":
                        formik.touched.graduacionProducto &&
                        formik.errors.graduacionProducto,
                    }
                  )}
                />
                 {formik.touched.graduacionProducto &&
                  formik.errors.graduacionProducto && (
                    <div className="fv-plugins-message-container text-danger fw-bolder">
                      <span role="alert">
                        {formik.errors.graduacionProducto}
                      </span>
                    </div>
                  )}
              </Form.Group>
              <Form.Group className="my-1" controlId="Disponibiliadad">
                <Form.Label>Availability</Form.Label>
                <Form.Select
                 {...formik.getFieldProps("disponibilidadProducto")}
                 className={clsx(
                   "form-control",
                   {
                     "is-valid":
                       formik.touched.disponibilidadProducto &&
                       !formik.errors.disponibilidadProducto,
                   },
                   {
                     "is-invalid":
                       formik.touched.disponibilidadProducto &&
                       formik.errors.disponibilidadProducto,
                   }
                 )}
                >
                  <option value="">Seleccione Disponibilidad</option>
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </Form.Select>
                {formik.touched.disponibilidadProducto &&
                  formik.errors.disponibilidadProducto && (
                    <div className="fv-plugins-message-container text-danger fw-bolder">
                      <span role="alert">
                        {formik.errors.disponibilidadProducto}
                      </span>
                    </div>
                  )}
              </Form.Group>
              <div className="text-center mt-3">
                <Button variant="warning" type="submit">
                  Create 🍻
                </Button>
                <Button
                  variant="danger"
                  className="mx-3"
                  onClick={() => navigate(`/tablaproducto`)}
                >
                  Go to Back 🡆
                </Button>
              </div>
            </Form>
          </Col>
          {/* Form Product */}
          {/* logo lateral */}
          <Col className="d-none d-md-block text-center">
            <Image src={logo} alt="logo" style={{ maxWidth: "100%" }} />
          </Col>
          {/* logo lateral */}
        </Row>
      </Container>
    </div>
  );
};

export default CreacionProducto;
