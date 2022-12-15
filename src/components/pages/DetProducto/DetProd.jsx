import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const DetProd = () => {
    return (
        <Container>
            <Row className='my-3'>
                <Col>
                    <Image style={{ width: '350px' }} src="holder.js/100px180" />
                </Col>
                <Col>
                    <h1>Producto</h1>
                    <h3>descripcion del producto</h3>
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