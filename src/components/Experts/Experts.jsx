import './experts.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function Experts() {
  return (
<div>
    <h1 className="subtitle">Choose Your Designer</h1>
    <Container className="expertsContainer">


  <CardGroup>
  <Card className="expertsCard">
    <Card.Img className="roomImage" variant="top" src="/images/warm-color-boho-bedroom.jpg" />
    <Card.Body>
      <Card.Title>Drew</Card.Title>
      <Card.Text>
        I love creating light, warm decor that has a cozy vibe, so you can maximize calmness in your home. I utilise plants, natural textures and airy fabric to bring the outdoors inside. 
      </Card.Text>
    </Card.Body>
    
  </Card>
 
  <Card className="expertsCard">
    <Card.Img className="roomImage" variant="top" src="/images/mcm-room.jpg" />
    <Card.Body>
      <Card.Title>Nick</Card.Title>
      <Card.Text>
        I specialize in mid-century modern inspired decor. I love using vintage furniture and funky decor to give you your own unique space.
      </Card.Text>
    </Card.Body>
    
  </Card>
  
  <Card className="expertsCard">
    <Card.Img className="roomImage" variant="top" src="/images/modern.jpeg" />
    <Card.Body>
      <Card.Title>Jessica</Card.Title>
      <Card.Text>
        My expertise is creating stylish, modern designs. I like combining cool neutrals and wood to really elevate a space and make you proud of the home you live in.
      </Card.Text>
    </Card.Body>
    
  </Card>
  
  </CardGroup>

  <Row>
      <div className="buttonContainer">
  <ToggleButtonGroup className="expertsButtons" type="radio" name="options" defaultValue={2}>
            <ToggleButton size = "small" className = "expertsButton" id="tbg-radio-1" value={1}> Select
            </ToggleButton>
            <ToggleButton className = "expertsButton"  id="tbg-radio-2" value={2}> Select
            </ToggleButton>
            <ToggleButton className = "expertsButton" id="tbg-radio-3" value={3}> Select
  </ToggleButton>
  </ToggleButtonGroup>
  </div>
    </Row>

    <a href="/packages">
    <button className="navButton" style={{position: 'absolute', right: '10vw', color:'white', borderRadius:'5px'}}>Next</button>
    </a>
    </Container>
    
</div>
  )
}
