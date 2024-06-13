import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Air ticket booking website"
              description="This website aware about the time schedule of the flights to the customers and they can book air tickets at anywhere anytime.The interface of this website build by using figma and html,css and java also supported."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://www.figma.com/design/acrn8Dqkx0D29b768AUDOR/Untitled?node-id=0-1&t=ThOAK4WT4WCYduZt-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="NSBM Recreation center app"
              description="This includes all sports of NSBM green university and student can scan the QR and get all details.Also can chat with club members and booking all the sports.The interface of this website build by using figma."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.figma.com/design/ahvmIlcC5LGyaH7w7OfDP7/NSBM-RECREATION-center-app?node-id=0-1&t=2Gs4uL67rCTaG1TI-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Agricultural app"
              description="This app helps to agricultural persons to buy seeds,sell plants,sell vegetables and they can hire workers and vehicles.they can get personal loans too.The interface of this website build by using figma."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://www.figma.com/design/4KrM7hugHesx9EqMewM6Os/Untitled?node-id=0-1&t=ZY61lOKGypaT9tqP-1"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="WORLD SCAN website"
              description="This app created for road and building construction company.This app provides the details of monthly paysheet,attendence sheet and bonus payment of the employees.The interface of this website build by using figma."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://www.figma.com/design/4CKAijSAe9w6aJ1EPkyTAx/Untitled?node-id=0-1&t=PuBW6zDYGo3tqHKJ-1"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
