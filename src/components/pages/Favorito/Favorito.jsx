import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Image, Row, Spinner, Table } from 'react-bootstrap'
import Swal from 'sweetalert2';
import instance from '../../../api/axiosUsuarios'
import { getuser_id } from '../../helpers/Jwt';

const Favorito = (props) => {
  const [favorites, setFavorites] = useState({})

  props.funcNav(true)


  const getFavorites = async () => {
    const user_id = getuser_id()
    try {
      console.log(user_id);
      const resp = await instance.get(`/favorites/${user_id}`)
      setFavorites(resp.data)
      console.log(resp.data);
    } catch (error) {
      console.log(error);
      alert("Error")
    }
  }

  const handleDelete = (id) => {
    const user_id = getuser_id()
    Swal.fire({
      title: 'Do you want to delete this product?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Accept'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const resp = await instance.delete(`/favorites/${id}`,

          );
          if (resp.status === 200) {
            Swal.fire(
              'Deleted',
              'The product was successfully deleted.',
              'success'
            )
            getFavorites()

          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  useEffect(() => {
    getFavorites()
  }, [])

  return (
    <>
      <Container className="py-5">
        <Row>
          <h1>Favorites table</h1>
          <hr />


          <Col xs={12}>
            <Table bordered striped variant="dark" responsive hover className="text-center align-middle mt-3">
              <thead>
                <tr>
                  <th>N.</th>
                  <th>Product</th>
                  <th>Details</th>
                  <th>Price</th>
                  <th>Img Url</th>
                  <th>Category</th>
                  <th>Graduation</th>
                  <th>Stock</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {favorites.length > 0 ?
                  favorites.map((prod, index) => (
                    <tr key={prod.product_id._id} >
                      <td>{index + 1}</td>
                      <td>{prod.product_id.ProductName}</td>
                      <td>{prod.product_id.Productdetalle}</td>
                      <td>${prod.product_id.PriceProduct}</td>
                      <td>
                        <Image className="truncate-img-link m-0" src={prod.product_id.ImgURL} width={100}
                          height={100} />
                      </td>
                      <td>{prod.product_id.Category}</td>
                      <td>{prod.product_id.Graduation}%</td>
                      <td>{prod.product_id.Avaliable ? 'Yes' : 'No'}</td>
                      <td >
                        <div className="d-flex justify-content-center">
                          <Button variant="outline-danger mx-1" onClick={() => handleDelete(prod._id)}>
                            <i className="fa-solid fa-trash-can"></i>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                  :
                  <tr>
                    <td>
                      <Spinner color="warning" />
                    </td>
                  </tr>}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Favorito
