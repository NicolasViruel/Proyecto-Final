import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css"


const Calesita = () => {
  return (
    <Carousel fade>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/5864290/pexels-photo-5864290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cerveza1"
        />
        <Carousel.Caption>
          <div className="trasluz">
            <h3>Bienvenidos a Born to Drink</h3>
            <p>Un lugar para pasar con amigos de la mejor manera</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/6174129/pexels-photo-6174129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cerveza2"
        />
        <Carousel.Caption>
          <div className="trasluz">

            <h3>Somos Lo mejor de la noche</h3>
            <p>Con excelente ambiente y la mejor musica</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cerveza3"
        />
        <Carousel.Caption>
          <div className="trasluz">
            <h3>Un ambiente agradable</h3>
            <p>Para conocer gente nueva o disfrutar con tus amigos</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/159291/beer-machine-alcohol-brewery-159291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cerveza4"
        />
        <Carousel.Caption>
          <div className="trasluz">
            <h3>Tenemos la mejor cerveza</h3>
            <p>Nuestros productos son perfectamente selecionados para que disfrutes de la mejor cerveza</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1089932/pexels-photo-1089932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cerveza5"
        />
        <Carousel.Caption>
          <div className="trasluz">
            <h3>Tenemos muchas variedades</h3>
            <p>Disfruta de nuestras vairedades de cervezas y tragos preparados por nuestros barman</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cerveza6"
        />
        <Carousel.Caption>
          <div className="trasluz">
            <h3>Aprovecha nuestros servicios</h3>
            <p>Trae a tu marido y retiralo dentro de unas horas, nunca hemos perdido a un marido y siempre se fue feliz de nuestro local</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1269043/pexels-photo-1269043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cerveza7"
        />
        <Carousel.Caption>
          <div className="trasluz">
            <h3>Veni y festeja tu cumple</h3>
            <p>Tenemos los mejores servicios y promociones para que festejes tu cumple con nosotros</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cerveza8"
        />
        <Carousel.Caption>
          <div className="trasluz">
            <h3>Los mejores tragos</h3>
            <p>Nuestros Barman te prepararán los mejores tragos para que te olvides de tu ex</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/995686/pexels-photo-995686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cerveza9"
        />
        <Carousel.Caption>
          <div className="trasluz">
            <h3>La mejor cerveza</h3>
            <p>Fria como el corazon de tu ex</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1796698/pexels-photo-1796698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="cerveza10"
        />
        <Carousel.Caption>
          <div className="trasluz">
            <h3>Proba nuestro fast food</h3>
            <p>Ademas de la mejor cerveza, tenemos las mejores comidas para acompañar tus bebidas</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
};

export default Calesita;
