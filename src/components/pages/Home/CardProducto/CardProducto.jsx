import React from 'react'
import { Container, Image, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ipa from '../../../../assets/img/imgHome/IPA1.jpg'
import Lagers from '../../../../assets/img/imgHome/amberLager.webp'
import Porter from '../../../../assets/img/imgHome/porter.png'
import Stout from '../../../../assets/img/imgHome/stout.jfif'
import Apa from '../../../../assets/img/imgHome/apa.jpg'
import Honey from '../../../../assets/img/imgHome/honey.jpg'
import Scottisch from '../../../../assets/img/imgHome/Scottisch.jfif'
import { Link } from 'react-router-dom';

const CardProducto = () => {
  return (
    <Container fluid className='bg-black'>
      <Row>
        <Card className='m-2' style={{ width: '18rem' }}>
          <Image variant="top" src={ipa} />
          <Card.Body>
            <Card.Title >Ipa</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">
              <Link to="/" className=" text-decoration-none text-center text-black">Home</Link>
            </Button>
            <Button variant="warning m-2">
              <Link to="/src/components/pages/DetProducto" className=" text-decoration-none text-center text-black">More detalls</Link>
            </Button>
          </Card.Body>
        </Card>
        <Card className='m-2' style={{ width: '18rem' }}>
          <Image variant="top" src={Lagers} />
          <Card.Body>
            <Card.Title>Amber Lagers</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">
              <Link to="/" className=" text-decoration-none text-center text-black">Home</Link>
            </Button>
            <Button variant="warning m-2">
              <Link to="/src/components/pages/DetProducto" className=" text-decoration-none text-center text-black">More detalls</Link>
            </Button>
          </Card.Body>
        </Card>
        <Card className='m-2' style={{ width: '18rem' }}>
          <Image variant="top" src={Porter} />
          <Card.Body>
            <Card.Title>Porter</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">
              <Link to="/" className=" text-decoration-none text-center text-black">Home</Link>
            </Button>
            <Button variant="warning m-2">
              <Link to="/src/components/pages/DetProducto" className=" text-decoration-none text-center text-black">More detalls</Link>
            </Button>
          </Card.Body>
        </Card>
        <Card className='m-2' style={{ width: '18rem' }}>
          <Image variant="top" src={Stout} />
          <Card.Body>
            <Card.Title>Stout</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">
              <Link to="/" className=" text-decoration-none text-center text-black">Home</Link>
            </Button>
            <Button variant="warning m-2">
              <Link to="/src/components/pages/DetProducto" className=" text-decoration-none text-center text-black">More detalls</Link>
            </Button>
          </Card.Body>
        </Card>
        <Card className='m-2' style={{ width: '18rem' }}>
          <Image variant="top" src={Apa} />
          <Card.Body>
            <Card.Title>Apa</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">
              <Link to="/" className=" text-decoration-none text-center text-black">Home</Link>
            </Button>
            <Button variant="warning m-2">
              <Link to="/src/components/pages/DetProducto" className=" text-decoration-none text-center text-black">More detalls</Link>
            </Button>
          </Card.Body>
        </Card>
        <Card className='m-2' style={{ width: '18rem' }}>
          <Image variant="top" src={Honey} />
          <Card.Body>
            <Card.Title>Honey</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">
              <Link to="/" className=" text-decoration-none text-center text-black">Home</Link>
            </Button>
            <Button variant="warning m-2">
              <Link to="/src/components/pages/DetProducto" className=" text-decoration-none text-center text-black">More detalls</Link>
            </Button>
          </Card.Body>
        </Card>
        <Card className='m-2' style={{ width: '18rem' }}>
          <Image variant="top" src={Scottisch} />
          <Card.Body>
            <Card.Title>Scottisch </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="warning">
              <Link to="/" className=" text-decoration-none text-center text-black">Home</Link>
            </Button>
            <Button variant="warning m-2">
              <Link to="/src/components/pages/DetProducto" className=" text-decoration-none text-center text-black">More detalls</Link>
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}

export default CardProducto