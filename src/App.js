import qr_img from './images/image-qr-code.png';
import './App.css';

function App() {
  return (
    <>
      <section className="qr_class">
        <img src={qr_img} alt="QR_Code" />
        <div className="qr_content">
        <div className='head'>Improve your front-end skills by building projects</div>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </section>
    </>
  );
}

export default App;
