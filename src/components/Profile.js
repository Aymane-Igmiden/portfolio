import { Suspense, lazy, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight } from 'react-bootstrap-icons';
import { Oval } from 'react-loader-spinner'
import TrackVisibility from 'react-on-screen';

import headerImg from "../assets/img/2.png";
import resume from "../assets/pdf/resume.pdf";
import 'animate.css';
const LazyEmbedCredlyBadge = lazy(() => import('./Credly'));

export default () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Node Runner", "Crypto Enthusiast"];
  const period = 2000;
  const current = new Date();
  const date = `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`;

  return (
    <div className="main--profile">
      <section className="profile" id="profile">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                <span className="section-kicker">03 / About</span>
                <h2>Engineering with range—and intent.</h2>
                <div className="about-lead">
                  <p>I’m Aymane, a senior software engineer specialising in AI tooling platforms, catalog architecture, and backend systems for products used at scale.</p>
                  <p>I care about foundations: the platform decisions, interfaces, and developer workflows that let teams move quickly without creating chaos.</p>
                </div>
                <div className="profile-grid">
                  <div className="profile-panel">
                    <span>Core stack</span>
                    <p>Java · TypeScript · JavaScript · Go · Rust · Python</p>
                  </div>
                  <div className="profile-panel">
                    <span>Cloud & systems</span>
                    <p>AWS · Docker · Kubernetes · CI/CD · Kafka · Redis</p>
                  </div>
                  <div className="profile-panel">
                    <span>Education</span>
                    <p>BSc Computer Science, University Putra Malaysia</p>
                  </div>
                  <div className="profile-panel">
                    <span>Certifications</span>
                    <p>AWS Solutions Architect · AWS Developer</p>
                  </div>
                </div>
                <div className="credly-wrap">
                <h3>Verified credentials</h3>
                <Suspense fallback={
                  <Oval
                    visible={true}
                    height="80"
                    width="80"
                    color="#B8B8B8"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass="spinner"
                  />
                }>
                  <LazyEmbedCredlyBadge />
                </Suspense>
                </div>
                <div className="contact-strip">
                  <div><span>Want to build something substantial?</span><h3>Let’s make it happen.</h3></div>
                  <a href="mailto:aymaneigmiden@gmail.com">Start a conversation <ArrowUpRight /></a>
                </div>
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img" />
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}
