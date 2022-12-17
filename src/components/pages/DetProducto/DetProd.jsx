import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
// import { useParams } from 'react-router-dom'



const DetProd = ({ title, src, description }) => {

     // siempre se inicializa primero el hook
//   const params = useParams()
  // luego se hace la destructuracion
//   const { title, src, description } = params

    return (
        <Container>
            <Row className='my-3'>
                <Col>
                    <Image style={{ width: '350px' }} src={src} />
                </Col>
                <Col>
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                    <h3>cantidad</h3>
                    <h3>precio</h3>
                    <h3>stock</h3>
                </Col>
            </Row>
            <Row>
                <Col><Button variant="warning">comprar</Button>
                    <Button className='mx-3' variant="warning">cancelar</Button>
                    <Button variant="warning">agragar al carrito</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default DetProd