import './packages.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { CheckCircleFill, XCircleFill } from 'react-bootstrap-icons';

export default function Packages() {
    return (
      <div style={{position: 'relative', display: 'flex', flexDirection: 'column', width: '100%', justifyContent: 'center', alignItems:'center'}}>
          <h1 className="subtitle">Choose Your Package</h1>
          <div className='packagesContainer'style={{ width: '70%', alignItems:'center', height: '60vh', marginTop: '2%'}}>
          <Row>
              <Col>
              
              <Table striped bordered size="xl">
                    <thead>
                        <tr>
                        <th style={{ width: '25%', fontSize: '20px'}}>What's Included</th>
                        <th style={{ width: '25%', fontSize: '30px', textAlign: 'center', backgroundColor: '#e7ebdd'}}>BUDGET</th>
                        <th style={{ width: '25%', fontSize: '30px', textAlign: 'center', backgroundColor: '#d6dbc8'}}>STANDARD</th>
                        <th style={{ width: '25%', fontSize: '30px', textAlign: 'center', backgroundColor: '#C9D1B5'}}>PRO</th>
                        </tr>

                    </thead>

                        <tbody style={{textAlign: 'center', fontSize: '17px'}}>

                        <tr>
                        <td style={{textAlign: 'left'}}>Curated shopping list</td>
                        <td><CheckCircleFill color="#568F56" size={20} /></td>
                        <td><CheckCircleFill color="#568F56" size={20} /></td>
                        <td><CheckCircleFill color="#568F56" size={20} /></td>
                        </tr>

                        <tr>
                        <td style={{textAlign: 'left'}}>1 on 1 interviews with your designer</td>
                        <td><CheckCircleFill color="#568F56" size={20} /></td>
                        <td><CheckCircleFill color="#568F56" size={20} /></td>
                        <td><CheckCircleFill color="#568F56" size={20} /></td>
                        </tr>
                        
                        <tr>
                        <td style={{textAlign: 'left'}}>Floorplan Sketch</td>
                        <td><CheckCircleFill color="#568F56" size={20} /></td>
                        <td><CheckCircleFill color="#568F56" size={20} /></td>
                        <td><CheckCircleFill color="#568F56" size={20} /></td>
                        </tr>

                        <tr>
                        <td style={{textAlign: 'left'}}>3D mockup of room</td>
                        <td><XCircleFill color="#b0aeae" size={20} /></td>
                        <td><CheckCircleFill color="#568F56" size={20} /></td>
                        <td><CheckCircleFill color="#568F56" size={20} /></td>
                        </tr>

                        

                        <tr>
                        <td style={{textAlign: 'left'}}>Ultra Realistic Final Render</td>
                        <td><XCircleFill color="#b0aeae" size={20} /></td>
                        <td><XCircleFill color="#b0aeae" size={20} /></td>
                        <td><CheckCircleFill color="#568F56" size={20} /></td>
                        </tr>

                        <tr>
                        <td style={{textAlign: 'left'}}>Multiple options to choose from</td>
                        <td><XCircleFill color="#b0aeae" size={20} /></td>
                        <td><XCircleFill color="#b0aeae" size={20} /></td>
                        <td><CheckCircleFill color="#568F56" size={20} /></td>
                        </tr>

                        <tr style={{fontSize: '30px', fontWeight: 'bold'}}>
                        <td style={{fontSize: '25px', textAlign: 'left', fontWeight: 'bold'}}>Cost</td>
                        <td >$199.99</td>
                        <td>$299.99</td>
                        <td>$399.99</td>
                        </tr>

                        
                    </tbody>
                    </Table>

              </Col>

          </Row>
          <Row>
              <Col></Col>
              <Col sm={9}>
          <ToggleButtonGroup className = "packageButtons" type="radio" name="options" defaultValue={2}>

                <ToggleButton className = "packageButton" id="tbg-radio-1" value={1}>Select</ToggleButton>
                <ToggleButton className = "packageButton" id="tbg-radio-2" value={2}>Select</ToggleButton>
                <ToggleButton className = "packageButton" id="tbg-radio-3" value={3}>Select</ToggleButton>
    
            </ToggleButtonGroup>
            </Col>
            </Row>
            <a href="/experts">
          <Button className="navButton" style={{position: 'absolute', left: '13vw'}}>Back</Button>
          </a>
         
          <a href="/date">
          <Button className="navButton" style={{position: 'absolute', right: '10vw'}}>Next</Button>
          </a>
          
          </div>
          
      </div>
    )
  }
  