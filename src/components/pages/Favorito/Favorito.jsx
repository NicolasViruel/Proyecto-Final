import React from 'react'
import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Col, Row, Card, Spinner, Badge } from "react-bootstrap";


const Favorito = (props) => {
  props.funcNav(true)
  const [productoFavorites, setProductosFavorites] = useState([])

  const getProductosFavorites = async () => {
    try {
      //creamos una constante para poner la info de la base
      const resp = await instance.get("/favorites/")
      //si la base tiene info seteamos producto para que traiga la info de la base
      setProductosFavorites(resp.data)
    } catch (error) {
      console.log(error);
      alert("Error")
    }

  }
  useEffect(() => {
    getProductosFavorites()
  }, [])

  return (
    // <div>Favorito</div>
    <Container className='pt-5'>
      <h1>Favorites:</h1>
      <hr />         
       {/* productos */}
       <Row>
          {productoFavorites.length > 0 ? (
            productoFavorites.map((prod) => (
              <Col xs={12} lg={4} md={6} key={prod._id} className="mb-3">
                <Card className="mt-4 h-100 card-test" style={{ position: 'relative' }}>
                  <Card.Img variant="top" src={prod.ImgURL} className="imagen-tarjeta" />
                  <Card.Body>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <Card.Title className="">{prod.ProductName}</Card.Title>
                    </div>
                    <Badge bg="warning" text="dark">{prod.Category}</Badge>{' '}
                    <Card.Text className='mt-3'>
                      {prod.Productdetalle}
                    </Card.Text>
                    <Card.Text>
                      Graduacion: {prod.Graduation}%
                    </Card.Text>
                    <Card.Text >
                      Precio:${prod.PriceProduct}
                    </Card.Text>
                   </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <div className='d-flex justify-content-center'>
              <Spinner color="warning" />
            </div>
          )}
        
          
        </Row>
        {/* productos */}
    </Container>
  )
}

export default Favorito
