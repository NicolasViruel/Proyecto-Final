import React, { useState } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import Swal from 'sweetalert2';
import logo from "../../../assets/img/logo/Imagen1.png"
import { validateProductName, validateDetalleProducto, validatePrice, validateUrl, validateCategory, validatePorcentaje, } from '../../helpers/validateFields';
import instance from "../../../api/axiosUsuarios";
import { useNavigate } from 'react-router-dom';


const CreacionProducto = () => {
  const [nombrerProducto, setnombreProducto] = useState("")
  const [detalleProducto, setdetallerProducto] = useState("Cerveza")
  const [precioProducto, setprecioProducto] = useState("0")
  const [urlProducto, seturlProducto] = useState("")
  const [categoriaProducto, setcategoriaProducto] = useState("Cerveza")
  const [graduacionProducto, setgraduacionProducto] = useState("")
  const [disponibilidadProducto, setdisponibilidadProducto] = useState("true")
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    //validador de campos
    if (
      !validateProductName(nombrerProducto) ||
      !validateDetalleProducto(detalleProducto) ||
      !validatePrice(precioProducto) ||
      !validateUrl(urlProducto) ||
      !validateCategory(categoriaProducto) ||
      validatePorcentaje(graduacionProducto)
    ) {
      Swal.fire("ops!", "Uno o mas Datos son Invalidos", "Error")
      return
    }

    const newProducto = {
      ProductName: nombrerProducto,
      Productdetalle: detalleProducto,
      PriceProduct: precioProducto,
      ImgURL: urlProducto,
      Category: categoriaProducto,
      Graduation: graduacionProducto,
      Avaliable: disponibilidadProducto
    }
    Swal.fire({
      title: 'Quieres crear este producto?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const resp = await instance.post("/productos/",
            newProducto,
          );

          if (resp.status === 200) {
            Swal.fire(
              'Creado!',
              'Su producto se creo correctamente.',
              'success'
            )

            navigate(`/tablaproducto`)

          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };



  return (
    <div>CreacionProducto</div>
  )
}

export default CreacionProducto