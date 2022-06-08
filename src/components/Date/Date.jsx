import './date.css';
import React, { useState } from "react";
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Calendar } from "react-modern-calendar-datepicker";


export default function Date() {
 
    const [selectedDay, setSelectedDay] = useState({
        year: 2022,
        month: 10,
        day: 5,
      });
  return (
    <div style={{justifyContent: 'center', alignItems: 'center'}} >
        
        <h1  style={{textAlign: 'center', marginTop:'2%'}} >Choose a Meeting Time</h1>
        <p style={{textAlign: 'center', marginBottom:'2%'}}>This will be your first meeting with your chosen designer!</p>
<div>
        <Row className="justify-content-md-center">
            <Col  xs lg="4" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#C9D1B5', height: '80%', width: '80%', padding: '4%', borderRadius:'10px'}}>
        <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      colorPrimary='#d79481' 
    />
        </div>
        <p style={{marginTop: '5%', marginLeft: '-55%'}}>Available Times:</p>
            <ToggleButtonGroup style={{marginLeft: '-30%'}} type="radio" name="options" defaultValue={1}>
                <ToggleButton className="dateButton" id="tbg-radio-1" value={1}>11:00</ToggleButton>
                <ToggleButton className="dateButton" id="tbg-radio-2" value={2}>11:30</ToggleButton>
                <ToggleButton className="dateButton" id="tbg-radio-3" value={3}>12:00</ToggleButton>
                <ToggleButton className="dateButton" id="tbg-radio-4" value={4}>12:30</ToggleButton>
                <ToggleButton className="dateButton" id="tbg-radio-5" value={5}>1:00</ToggleButton>
            </ToggleButtonGroup>
            </Col>
        
        <Col  xs lg="4" style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Form  style={{width: '70%'}} >
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>First Name</Form.Label>
    <Form.Control type="email" placeholder="First name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="email" placeholder="Last name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasic">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasic">
    <Form.Control style={{width: '60%'}} type="email" placeholder="PROMO CODE" />
  </Form.Group>

  
</Form>
<a href="/confirmation">
          <Button className="bookButton" >Book now!</Button>
          </a>
</Col>
</Row>
</div>

        <a href="/packages">
          <Button className="navButton" style={{position: 'absolute', left: '10vw'}}>Back</Button>
          </a>
         
    </div>
  )
}