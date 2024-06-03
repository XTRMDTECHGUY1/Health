import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../src/assets/img/home_FILL0_wght300_GRAD0_opsz24.svg'
import People from '../src/assets/img/group_FILL0_wght300_GRAD0_opsz24.svg'
import Schedule from '../src/assets/img/calendar_today_FILL0_wght300_GRAD0_opsz24.svg'
import Message from '../src/assets/img/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg'
import Transaction from '../src/assets/img/credit_card_FILL0_wght300_GRAD0_opsz24.svg'
import Logo from '../src/assets/img/TestLogo.svg'
import Jose from '../src/assets/img/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png';
import Line from '../src/assets/img/hrline.png'
import Settings from '../src/assets/img/settings_FILL0_wght300_GRAD0_opsz24.svg'
import dot1 from '../src/assets/img/more_vert_FILL0_wght300_GRAD0_opsz24.svg'

const Header = () => {
  return (

 
    <Navbar expand="lg"  className="navbody">
      <Container>
      <Navbar.Brand href="#home"> <img src={Logo} alt='' className='Logo'/> </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navtext col d-flex justify-content-center">

            <Nav.Link href="#home"className='textc'> <img src={Home} alt='' className='image'/> <b className='text' > Overview </b></Nav.Link>
            <Nav.Link href="#link"className='textc'><img src={People} alt='' className='image' /> <b className='text'>    Patients     </b> </Nav.Link>
            <Nav.Link href="#link"className='textc'><img src={Schedule} alt='' className='image' /> <b className='text'>    Schedule     </b> </Nav.Link>
            <Nav.Link href="#link"className='textc'><img src={Message} alt='' className='image' /> <b className='text'>    Message      </b> </Nav.Link>
            <Nav.Link href="#link"className='textc'><img src={Transaction} alt='' className='image' /> <b className='text'>    Transactions </b> </Nav.Link>
            
          </Nav>

          <div>
          <Nav.Link href="#link"><img src={Jose} alt='' className='imagee' /> 
          <b className='text' style={{fontSize:'11px'}}>    Dr. Jose Simmons   </b> 
         <p style={{color: 'black', fontWeight: 'lighter', fontSize:'11px', marginLeft:'39px',marginTop: '-19px'}}>
          General Practitional </p> </Nav.Link>

          </div>
          <div>
          <img src={Line} alt='' className='image1'/>
          <img src={Settings} alt='' className='image2'/>
          <img src={dot1} alt='' className='image'/>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header
