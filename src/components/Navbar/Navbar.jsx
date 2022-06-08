import './navbar.css';
import { HouseDoor } from 'react-bootstrap-icons';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='left'>
        <a href="/"><HouseDoor color="#C9D1B5" size={30}/></a>
        
      </div>
      <div className='right'>
        <a href="/#contact">Contact</a>
        <a href="/FAQ">FAQ</a>
      </div>
    </div>
  )
}
