import React from 'react'

const contacto = (props) => {
  props.funcNav(true)
  return (
    <Container className='mb-5 pt-5'>
      <h1 >The team who worked on this project</h1>
      <hr />
      <Row className='text-center'>
        <Col className='mb-4 mx-auto text-center d-flex justify-content-center'>
          <Profile img={ironMan} name='Nicolas Viruel' text='BackEnd' face="https://www.facebook.com/" tw="https://twitter.com/" ig="https://www.instagram.com/" github="https://github.com/NicolasViruel" linkedin="https://www.linkedin.com/in/nicolasviruel6776/" />
        </Col>

        <Col className='mb-4 mx-auto text-center d-flex justify-content-center'>
          <Profile img={Thor} name='Jose Triviño' text='BackEnd' face="https://www.facebook.com/" tw="https://twitter.com/" ig="https://www.instagram.com/" github="https://github.com/josetrivino89" linkedin="https://www.linkedin.com/" />
        </Col>

        <Col className='mb-4 mx-auto text-center d-flex justify-content-center'>
          <Profile img={antMan} name='Franco Monteros' text='FrontEnd' face="https://www.facebook.com/" tw="https://twitter.com/" ig="https://www.instagram.com/" github="https://github.com/FrancoMonteros" linkedin="https://www.linkedin.com/" /></Col>

        <Col className='mb-4 mx-auto text-center d-flex justify-content-center'>
          <Profile img={drStrange} name='Gabriel carrizo' text='FrontEnd' face="https://www.facebook.com/" tw="https://twitter.com/" ig="https://instagram.com/1gabrielcarrizo" github="https://github.com/1gabrielcarrizo" linkedin="https://www.linkedin.com/in/1gabrielcarrizo/" />
        </Col>
      </Row>
    </Container>
  )
}

export default contacto