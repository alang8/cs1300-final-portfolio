import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project4 from "./assets/project4.png";
import Project5 from "./assets/project5.png";
import { SocialIcon } from "react-social-icons";
import { AiOutlineFilePdf } from "react-icons/ai";
import { useEffect } from "react";
import AOS from "aos";

// 1. https://cs1300-personas-storyboarding.pages.dev/
// 2. https://cs1300-responsive-redesign.pages.dev/
// 4. https://cs1300-iterative-design-ewz.pages.dev/
// 5. https://luckylion777.github.io/project-5-development/

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <b>Lucky Lion's Portfolio</b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <section className="section" id="about">
          <Container>
            <p>
              <h1>
                👋 <b>Greetings, I'm Lucky Lion!</b> 🦁
              </h1>
              <h2 className="line">
                UX designer passionate about solving relatable problems through
                fun and accessible experiences.{" "}
              </h2>
              <h5 className="line">
                Currently studying computer science and economics{" "}
                <a href="https://cs.brown.edu/">@Brown University</a>.
              </h5>
            </p>
          </Container>
        </section>
        <hr className="line"></hr>
        <section className="section" id="projects">
          <Container>
            <p>
              <h2>
                <b>Check out some of my projects!</b>
              </h2>
            </p>
            <Row xs={1} md={2}>
              <Col className="card-col">
                <Card className="showcase-panel" data-aos="flip-left">
                  <Card.Img variant="top" src={Project1} />
                  <Card.Body>
                    <Card.Title>
                      <b>Personas and Storyboarding</b>
                    </Card.Title>
                    <Card.Text>
                      This CSCI 1300 project asks students to research a public
                      interface and analyze how users interact with it. My
                      interface of choice will be the drink machines in the
                      Ratty, which many students use to dispense their beverages
                      every day. These machines are a variant of the "Coca-Cola
                      Freestyle" machines found in commercial restaurant chains.
                    </Card.Text>
                  </Card.Body>
                  <Button
                    className="card-button"
                    variant="outline-primary"
                    href="https://cs1300-personas-storyboarding.pages.dev/"
                  >
                    <b>Explore</b>
                  </Button>{" "}
                </Card>
              </Col>
              <Col className="card-col">
                <Card className="showcase-panel" data-aos="flip-right">
                  <Card.Img variant="top" src={Project2} />
                  <Card.Body>
                    <Card.Title>
                      <b>Responsive Redesign</b>
                    </Card.Title>
                    <Card.Text>
                      This CSCI 1300 project asks students to practice the
                      workflow of redesigning a simple website. The website I
                      chose was the official website of D&A House of Pizza, my
                      favorite local pizza place that I used to live next to. I
                      have never visited their website before this project, but
                      looking at it now, I think that a lot of improvements
                      could be made.
                    </Card.Text>
                  </Card.Body>
                  <Button
                    className="card-button"
                    variant="outline-primary"
                    href="https://cs1300-responsive-redesign.pages.dev/"
                  >
                    <b>Explore</b>
                  </Button>{" "}
                </Card>
              </Col>
              <Col className="card-col">
                <Card className="showcase-panel" data-aos="flip-left">
                  <Card.Img variant="top" src={Project4} />
                  <Card.Body>
                    <Card.Title>
                      <b>Iterative Design and Evaluation</b>
                    </Card.Title>
                    <Card.Text>
                      This CSCI 1300 project asks students to iteratively design
                      an application for a startup. My team chose Avocademy, a
                      startup dedicated to teaching people UI/UX design. They
                      offer an eight-week personalized UI/UX curriculum,
                      mentoring services, and portfolio support. We chose this
                      startup because we are all current students in a UI/UX
                      course at Brown, which allows us to integrate our
                      perspectives into the project.
                    </Card.Text>
                  </Card.Body>
                  <Button
                    className="card-button"
                    variant="outline-primary"
                    href="https://cs1300-iterative-design-ewz.pages.dev/"
                  >
                    <b>Explore</b>
                  </Button>{" "}
                </Card>
              </Col>
              <Col className="card-col">
                <Card className="showcase-panel" data-aos="flip-right">
                  <Card.Img variant="top" src={Project5} />
                  <Card.Body>
                    <Card.Title>
                      <b>Development</b>
                    </Card.Title>
                    <Card.Text>
                      This CSCI 1300 project asks students to develop a web
                      application of their choice with React. I chose to develop
                      a wishlist tracking website for Genshin Impact players.
                      One of the main factors that made this game so popular was
                      its cast of characters, and I thought it would be fun and
                      helpful to have a platform to track which characters you
                      are saving for.
                    </Card.Text>
                  </Card.Body>
                  <Button
                    className="card-button"
                    variant="outline-primary"
                    href="https://luckylion777.github.io/project-5-development/"
                  >
                    <b>Explore</b>
                  </Button>{" "}
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <hr className="line"></hr>
        <section className="section" id="contact">
          <Container>
            <p>
              <h2>
                <b>Let's Connect!</b>
              </h2>
              <h5 className="line">
                <i>
                  N.B. To maintain anonymity for the purposes of this
                  assignment, the links below are not functional.
                </i>
              </h5>
              <h5 className="line">
                <a href="https://drive.google.com">
                  My Resume <AiOutlineFilePdf />
                </a>
              </h5>
            </p>
            <SocialIcon url="https://linkedin.com" className="social" />{" "}
            <SocialIcon url="https://github.com" className="social" />{" "}
            <SocialIcon url="mailto://" className="social" />{" "}
            <SocialIcon url="instagram.com" className="social" />{" "}
          </Container>
        </section>
      </div>
    </>
  );
}

export default App;
