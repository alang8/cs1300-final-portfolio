import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project4 from "./assets/project4.png";
import Project5 from "./assets/project5.png";
import { SocialIcon } from "react-social-icons";
import { AiOutlineFilePdf } from "react-icons/ai";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// 1. https://cs1300-personas-storyboarding.pages.dev/
// 2. https://cs1300-responsive-redesign.pages.dev/
// 4. https://cs1300-iterative-design-ewz.pages.dev/
// 5. https://luckylion777.github.io/project-5-development/

function App() {
  // Initialize AOS
  // Source: https://michalsnik.github.io/aos/
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const handleCard1 = () => {
    window.open("https://cs1300-personas-storyboarding.pages.dev/");
  };

  const handleCard2 = () => {
    window.open("https://cs1300-responsive-redesign.pages.dev/");
  };

  const handleCard3 = () => {
    window.open("https://cs1300-iterative-design-ewz.pages.dev/");
  };

  const handleCard4 = () => {
    window.open("https://luckylion777.github.io/project-5-development/");
  };

  return (
    <>
      <div className="App">
        <Navbar expand="lg">
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
                👋 <b>Greetings, I'm Lucky Lion!</b> 🍀
              </h1>
              <h2 className="line">
                UX designer passionate about solving relatable problems through
                simple and accessible experiences.{" "}
              </h2>
              <h5 className="line">
                Currently studying computer science and economics{" "}
                <a href="https://cs.brown.edu/">@Brown University</a>.
              </h5>
            </p>
            <div className="animation">
              <div class="combined">
                <div class="plane">
                  <div class="wingRight"></div>
                  <div class="wingLeft"></div>
                  <div class="bottom"></div>
                  <div class="top"></div>
                  <div class="middle"></div>
                </div>
                <div class="clouds">
                  <div class="cloudOne"></div>
                  <div class="cloudTwo"></div>
                  <div class="cloudThree"></div>
                </div>
              </div>
            </div>
            <h5 className="line2">
              UX design is like building a paper airplane. One's project can
              take flight with a few simple folds and a little bit of
              creativity.
            </h5>
            <h5 className="line">
              “Squint at the world. You will see more, by seeing less.” ― John
              Maeda, <i>The Laws of Simplicity</i>
            </h5>
          </Container>
        </section>
        <hr className="line"></hr>
        <section className="section" id="projects">
          <Container>
            <p data-aos="fade-up">
              <h2>
                <b>Check out some of my projects!</b>
              </h2>
              <h5 className="line" style={{ marginBottom: 30 }}>
                Click on the cards below to see more about each project.
              </h5>
            </p>
            <Row xs={1} md={2} data-aos="flip-up">
              <Col className="card-col">
                <Card
                  onClick={handleCard1}
                  style={{ cursor: "pointer" }}
                  className="showcase-panel"
                >
                  <Card.Img variant="top" src={Project1} />
                  <Card.Body>
                    <Card.Title>
                      <b>Personas and Storyboarding</b>
                    </Card.Title>
                    <Card.Text>
                      This project asked students to research a public interface
                      and analyze how users interact with it in order to design
                      an improved version. My interface of choice will be the
                      drink machines in the Ratty dining hall, which many
                      students use to dispense their beverages every day.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="card-col">
                <Card
                  onClick={handleCard2}
                  style={{ cursor: "pointer" }}
                  className="showcase-panel"
                >
                  <Card.Img variant="top" src={Project2} />
                  <Card.Body>
                    <Card.Title>
                      <b>Responsive Redesign</b>
                    </Card.Title>
                    <Card.Text>
                      This project asked students to follow the workflow of
                      redesigning and remaking a public website. The website I
                      chose was the official website of D&A House of Pizza, my
                      favorite local pizza place that I used to live next to.
                      Their original site had an extremely outdated design.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="card-col">
                <Card
                  onClick={handleCard3}
                  style={{ cursor: "pointer" }}
                  className="showcase-panel"
                >
                  <Card.Img variant="top" src={Project4} />
                  <Card.Body>
                    <Card.Title>
                      <b>Iterative Design and Evaluation</b>
                    </Card.Title>
                    <Card.Text>
                      This project asked students to iteratively design an
                      application for a startup. My team chose Avocademy, a
                      startup dedicated to teaching people UI/UX design. They
                      offer an eight-week personalized UI/UX curriculum,
                      mentoring services, and portfolio support.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="card-col">
                <Card
                  onClick={handleCard4}
                  style={{ cursor: "pointer" }}
                  className="showcase-panel"
                >
                  <Card.Img variant="top" src={Project5} />
                  <Card.Body>
                    <Card.Title>
                      <b>Development</b>
                    </Card.Title>
                    <Card.Text>
                      This project asks students to develop a web application of
                      their choice. I chose to develop a wishlist website for
                      Genshin Impact players so they track can which characters
                      to save for. One important aspect of the site is that it
                      pulls data from the game API for easy future updates.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <hr className="line"></hr>
        <section className="section" id="contact">
          <Container>
            <p data-aos="fade-up">
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
            <SocialIcon
              url="https://linkedin.com"
              className="social"
              data-aos="zoom-in"
            />{" "}
            <SocialIcon
              url="https://github.com"
              className="social"
              data-aos="zoom-in"
            />{" "}
            <SocialIcon url="mailto://" className="social" data-aos="zoom-in" />{" "}
            <SocialIcon
              url="instagram.com"
              className="social"
              data-aos="zoom-in"
            />{" "}
          </Container>
        </section>
        <section className="footer">Copyright © Lucky Lion 2022</section>
      </div>
    </>
  );
}

export default App;
