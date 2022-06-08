import './getStarted.css';

export default function GetStarted() {
  return (
    <div style={{display: 'flex',  flexDirection:'column', justifyContent:'center', alignItems:'center', height: '80vh', paddingTop:'10%', backgroundColor:'#F6F6F6'}}>
        <h1>Ready to upgrade your home?</h1>
        <a href="/experts" className="linkwrapper">
        <button className="getStarted">Get Started!</button>
        </a>
    </div>
  )
}
