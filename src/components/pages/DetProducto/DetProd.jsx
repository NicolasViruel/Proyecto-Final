import React from 'react'
import { Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const DetProd = () => {
    return (

        <Container style={{ width: '350px' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Col className=''>
                <h1>Producto</h1>
            </Col>
            <Col>
                <h3>descripcion del producto</h3>
            </Col>
            <Col>
                <h3>cantidad</h3>
                <h3>precio</h3>
                <h3>stock</h3>
            </Col>
                <Button variant="warning">comprar</Button>
                <Button variant="warning">cancelar</Button>
                <Button variant="warning">agragar al carrito</Button>
        </Container>

    )
}

export default DetProd