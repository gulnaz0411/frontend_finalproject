import React from 'react';
import Slider from './Components/Slider';

import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import bike1 from './bike1.jpg';
import bike2 from './bike2.jpg';
import bike3 from './bike3.jpg';



export const Home = () => (
  <> 
   <Slider/>
   <Container style={{paddingTop: '3rem', paddingBottom: '3rem'}}>
      <Row>
           <Col>
                <Card style={{width:'18rem'}}>
                  <Card.Img variant="top" src={bike1}/>
                  <Card.Body>
                     <Card.Title>Mountain bike</Card.Title>
                     <Card.Text>
                       Горные велосипеды отличаются от&nbsp;других мягкой амортизационной вилкой, прочными большими колёсами&nbsp;&mdash; не&nbsp;менее 26&nbsp;дюймов, толстыми покрышками с&nbsp;агрессивным протектором. В&nbsp;среднем такие велосипеды весят 12-15&nbsp;кг.
                     </Card.Text>
                     <Button variant="primary">Сhoose</Button>
                  </Card.Body>
                </Card>

           </Col>
           <Col>
                <Card style={{width:'18rem'}}>
                  <Card.Img variant="top" src={bike2}/>
                  <Card.Body>
                     <Card.Title>City bike</Card.Title>
                     <Card.Text>
                       Городской велосипед сконструирован специально для езды по&nbsp;ровной местности, как по&nbsp;асфальтированным дорогам города, так и&nbsp;для небольших прогулок за&nbsp;его пределами.<br/> Такие велосипеды отлично рассчитаны  на долгую эксплуатацию.
                     </Card.Text>
                     <Button variant="primary">Сhoose</Button>
                  </Card.Body>
                </Card>

           </Col>
           <Col>
                <Card style={{width:'18rem'}}>
                  <Card.Img variant="top" src={bike3}/>
                  <Card.Body>
                     <Card.Title>Hybrid bike</Card.Title>
                     <Card.Text>
                      велосипед, который сочетает в&nbsp;своей конструкции элементы горного (MTB) и&nbsp;шоссейного велосипеда. От&nbsp;гравийного велосипеда (гравела) его отличает прямой мтб-шный руль, передняя амортизационная вилка (не&nbsp;всегда) и&nbsp;более высокая посадка райдера.
                     </Card.Text>
                     <Button variant="primary">Сhoose</Button>
                  </Card.Body>
                </Card>

           </Col>
      </Row>
   </Container>
   <Container style={{marginBottom: '30px'}}>
       <Row>
          <Col md={7}>
               <img src={bike1} height={400}/>

          </Col>
          <Col md={5}>
               <h2>Сервис велопроката</h2>
               <p>Наша служба велопроката предлагает разнообразные высококачественные велосипеды по&nbsp;доступным ценам для Вашего приятного отдыха, также мы&nbsp;предоставляем сервис по&nbsp;ремонту и&nbsp;организуем для Вас велосипедный тур.</p>
          </Col>
       </Row>
   </Container>


  </> 
)
