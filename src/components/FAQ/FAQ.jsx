import './faq.css';
import Accordion from 'react-bootstrap/Accordion';

export default function FAQ() {
  return (
   <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
       
       <h1 style={{padding: '3%'}}>Frequently Asked Questions</h1>
       <div style={{width: '80vh'}}>
       <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>What's the benefit of online interior design?</Accordion.Header>
    <Accordion.Body>
    Since our services are online, our prices are much cheaper than you 
    would find from a traditional interior design company. You can get 
    design advice from the comfort of your own home without the extra costs.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What is the purpose of meeting with my designer?</Accordion.Header>
    <Accordion.Body>
     During your first meeting, you and your designer will discuss exactly what their job is going
     to be with you. You will tell them which room you want to redesign, your furniture budget,
     and discuss your style in depth. Of course, you will also need to get some measurements of the 
     room in question so the designer knows exactly what they're working with! Every meeting after
     this one will be to ensure the designer is on the right track with your design, so you
     are confident in the money you're spending.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>How many meetings will we have? Where are they?</Accordion.Header>
    <Accordion.Body>
     Depending on which package you purchase, the number of meetings with your designer can range from 2,
     all the way up to 10. It really depends on your preferences. Some people want to make sure they're 
     getting something perfect for them, and others prefer to let the designer take the reins. 
     Meetings are held online via Zoom. 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>What if I don't like my design?</Accordion.Header>
    <Accordion.Body>
     Throughout the design process, you will have many opportunities to work with your designer to create something you love. 
     If you're not happy with it, no worries. The designer will ensure to tweak your design to your preferences. 
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>I have more questions, who can I ask?</Accordion.Header>
    <Accordion.Body>
     You can contact us with any questions via phone call, or email. Our contact information is on the homepage under "Contact Us".
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    
       </div>
   </div>
  )
}