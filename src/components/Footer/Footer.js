import Button from 'react-bootstrap/Button';
import './Footer.css';

const Footer = () => {
    return(
    <footer className='footer'>
    <p>
      <Button variant="link" href='Impressum.html'>Impressum</Button>     
      <Button variant="link" href='mailto:rayen.phillip@googlemail.com'>Contact</Button>
    </p>
  </footer>
  );}

export default Footer;