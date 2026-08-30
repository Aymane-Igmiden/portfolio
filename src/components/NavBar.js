import React,  { useState, useEffect }  from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";

import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/discord.svg';

export default () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" aria-label="Aymane Igmiden home"><span>AI</span><small>/ engineer</small></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="navbar-link" href="#home">Home</Nav.Link>
              <Nav.Link className="navbar-link" href="#work">Experience</Nav.Link>
              <Nav.Link className="navbar-link" href="#project">Projects</Nav.Link>
              <Nav.Link className="navbar-link" href="#profile">About</Nav.Link>
              <Nav.Link className="navbar-link world-link" href="/myspace/">Enter My World <span aria-hidden="true">↗</span></Nav.Link>
              {/* <Nav.Link className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link> */}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://discord.com/users/400084054852239361" target="_blank"><img src={navIcon3} alt="Discord" /></a>
                <a href="https://github.com/sordgom"target="_blank"><img src={navIcon2} alt="Github" /></a>
                </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>    
  )
}
