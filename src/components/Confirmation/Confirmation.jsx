import './confirmation.css';

export default function Confirmation() {
  return (
    <div style={{display: 'flex',  flexDirection:'column', justifyContent:'center', alignItems:'center', height: '80vh'}}>
        <h1>Your first meeting appointment has been confirmed!</h1>
        <h4 style={{color: '#96a189', paddingTop: "1%"}}>We look forward to helping you create your dream home.</h4>
    </div>
  )
}