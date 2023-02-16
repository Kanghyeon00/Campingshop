import { Carousel } from "react-bootstrap";

function Bgimgs() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/img/bg.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3 className="message">
            캠핑은 언제나 돈의 문제가 아니고, 용기의 문제이다.
          </h3>
          <p className="message">-파울로 코엘료-</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/img/bg2.png" alt="Second slide" />

        <Carousel.Caption>
          <h3 className="message">
            세상에서 가장 즐거운 일은 캠핑이다. 그러나 나는 혼자서 가기를
            좋아한다
          </h3>
          <p className="message">-윌리엄 헤즐릿-</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="/img/bg3.jpg" alt="Third slide" />

        <Carousel.Caption>
          <h3 className="message">
            인생은 짧고 세상은 넓다. 그러므로 세상 탐험은 빨리 시작하는 것이
            좋다.
          </h3>
          <p className="message">-사이먼 레이븐-</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Bgimgs;
