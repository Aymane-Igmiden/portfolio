import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight, Download } from 'react-bootstrap-icons';
import resume from '../assets/pdf/resume.pdf';

export default () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center hero-grid">
          <Col xs={12} lg={7}>
            <div className="availability"><span /> Available for meaningful engineering work</div>
            <p className="eyebrow">Senior software engineer · AI platforms · Backend systems</p>
            <h1>I build the <span>infrastructure</span> behind ambitious products.</h1>
            <p className="hero-copy">I’m Aymane Igmiden, a software engineer focused on AI tooling, developer platforms, and reliable distributed systems.</p>
            <div className="hero-actions">
              <a className="primary-action" href="mailto:aymaneigmiden@gmail.com">Let’s talk <ArrowUpRight /></a>
              <a className="secondary-action" href={resume} target="_blank" rel="noreferrer"><Download /> Résumé</a>
            </div>
            <div className="hero-meta">
              <div><strong>4+</strong><span>Years building</span></div>
              <div><strong>3</strong><span>Production domains</span></div>
              <div><strong>2×</strong><span>Hackathon winner</span></div>
            </div>
          </Col>
          <Col xs={12} lg={5}>
            <div className="signal-card" aria-label="Engineering focus">
              <div className="terminal-bar"><span></span><span></span><span></span><small>aymane@portfolio</small></div>
              <div className="terminal-body">
                <p><b>~</b> profile --current</p>
                <div className="terminal-output">
                  <span>role</span><strong>Senior Software Engineer</strong>
                  <span>focus</span><strong>AI platforms & backend</strong>
                  <span>stack</span><strong>TypeScript · Go · Java · Rust</strong>
                  <span>location</span><strong>Kuala Lumpur</strong>
                </div>
                <p className="terminal-prompt"><b>~</b> <i></i></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
