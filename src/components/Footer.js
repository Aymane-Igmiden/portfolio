import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import navIcon2 from "../assets/img/github.svg";
import resume from "../assets/pdf/resume.pdf";
import 'animate.css';

export default () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center footer-main">
          <Col size={12} md={5}>
            <a className="footer-identity" href="mailto:aymaneigmiden@gmail.com">
              <span className="footer-mark">AI</span>
              <span><strong>Aymane Igmiden</strong><small>Senior Software Engineer</small></span>
            </a>
          </Col>
          <Col size={12} md={7}>
            <div className="footer-actions">
              <nav className="footer-links" aria-label="Footer navigation"><a href={resume} target="_blank" rel="noreferrer">Résumé</a><a href="https://www.linkedin.com/in/aymane-igmiden/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:aymaneigmiden@gmail.com">Email</a></nav>
              <a className="footer-github" href="https://github.com/sordgom" target="_blank" rel="noreferrer"><img src={navIcon2} alt="" /> GitHub</a>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Aymane Igmiden</span><span>Kuala Lumpur, MY</span></div>
      </Container>
    </footer>
  )
}
