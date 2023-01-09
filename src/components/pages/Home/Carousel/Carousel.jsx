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
            <h3>Welcome to Born to Drink</h3>
            <p>A place to hang out with friends</p>
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

            <h3>We're the best of the night</h3>
            <p>With excellent atmosphere and the best music</p>
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
            <h3>A great place</h3>
            <p>To meet new people or enjoy with your friends</p>
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
            <h3>We've the best beers</h3>
            <p>Our products are perfectly selected so that you can enjoy the best beer</p>
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
            <h3>We've many varieties</h3>
            <p>Enjoy our varieties of beers and drinks prepared by our bartenders</p>
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
            <h3>We have excellent services</h3>
            <p>Bring your husband and pick him up in a few hours, we've never lost a husband and he always leaves our place happy</p>
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
            <h3>Come and celebrate your birthday</h3>
            <p>We've the best promotions for you to celebrate your birthday with us</p>
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
            <h3>The best bartenders</h3>
            <p>Our bartenders will prepare the best drinks for you to forget your ex</p>
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
            <h3>Cold beers</h3>
            <p>As cold as your ex's heart</p>
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
            <h3>Try our fast food</h3>
            <p>Besides the best beer, we've the best food too</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
};

export default Calesita;
