import React from 'react'
import {Card, Image, Button} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
// import DetProd from '../../DetProducto/DetProd';

const CardProduct = ({title, src, description}) => {

    const navigate = useNavigate()
  return (
    <Card className='m-2 bg-dark text-warning text-center' style={{ width: '18rem' }}>
          <Image variant="top" className='w-100 h-100' src={src} />
          <Card.Body>
            <Card.Title >{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Button variant="warning">
              <Link to="*" className=" text-decoration-none text-center text-black">Buy</Link>
            </Button>
            {/* <Button variant="warning m-2">
              <Link to={<DetProd title={title} src={src} description={description}/>} className=" text-decoration-none text-center text-black">More detalls</Link>
            </Button> */}
            <Button variant="warning m-2" onClick={() => navigate(`/products/${title}`)}>
                More details
            </Button>
          </Card.Body>
        </Card>
  )
}

export default CardProduct
