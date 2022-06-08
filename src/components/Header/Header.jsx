import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { HouseDoor } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container'

export default function Header() {
  return (
    <div >
      
      <div className='background'>
        <div>
          <Row>
          <Col>
          
          <h1  style={{ textShadow: '2px 2px 5px grey', paddingTop:'1%', color: 'white', fontSize: '80px', textAlign: 'center'}}><HouseDoor style={{lineHeight:'50px', verticalAlign: 'middle', paddingBottom: '1%'}} color="white" size={100}/> OnlineDesign</h1>
          <h2 style={{textAlign: 'center'}}>Helping you create your dream home.</h2>
          </Col>
          </Row>

<Row style={{paddingTop: '3%'}}>
  <Col>
  <div className="AboutUs">
    <h3 style={{textAlign: 'center'}}>Who We Are</h3>
    <p>OnlineDesign is your place to go for online interior design consultation. We have a highly skilled team of designers that will help you achieve the style you've always fantasized about. Since our services are online, we're able to offer more affordable and accessible interior design to everyone. A beautiful home is not just for high budgets! 
    </p>
    </div></Col>
<Col xs={8}>
          <Carousel>
  <Carousel.Item>
    <img
      className="plantimage"
      src='/images/BEFORE1.jpg'
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="plantimage"
      src='/images/BEFORE2.jpg'
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="plantimage"
      src='/images/BEFORE3.jpg'
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
</Col>
</Row>
<div>
</div>
        </div>
      </div>
    </div>
  )
}
