import './contact.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Instagram, TelephoneFill, Envelope } from 'react-bootstrap-icons';

export default function Contact() {
  return (
    <div className='contact' id='contact'>
      <Row>
        <Col></Col>
        <Col xs={4}>
        <div className="contactContainer">
        <h1 style={{textAlign: 'center'}}>Contact Us</h1>
        <ListGroup variant="flush">
  <ListGroup.Item><TelephoneFill  style={{marginBottom: '2px', marginRight: '5px'}} size={20}></TelephoneFill>613 - 123 - 4444</ListGroup.Item>
  <ListGroup.Item><Envelope style={{marginBottom: '2px', marginRight: '5px'}} size={20}></Envelope>support@onlinedesign.ca</ListGroup.Item>
  <ListGroup.Item><Instagram style={{marginBottom: '2px', marginRight: '5px'}} size={20}></Instagram>@online_design</ListGroup.Item>
  
</ListGroup>
</div>
        </Col>
        <Col xs={1}></Col>
        <Col xs={4}>
          <div className="contactContainer">
        <h2 style={{textAlign: 'center'}}>Visit our store to browse our furniture selection!</h2>
        <img
      className="map"
      src='/images/googlemaps.jpg'
      alt="map"
      width={400}
      style={{padding: '3%'}}
     
    />
    <p>Open 9am - 7pm on weekdays.</p>
        </div>
        </Col>
        <Col></Col>
      </Row>
    </div>
  )
}
