import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rasith Abeywickrama </span>
            from <span className="purple"> Sri Lanka.</span>
            <br />
            <br />
            I am undergraduated <span className="purple"> BSc (hons) Software Engineering  </span> student at <span className="purple"> NSBM Green University. </span>
            <br />
            <br />
            I had done my adavanced level in <span className="purple"> physical scheme </span> at <span className="purple"> St. Aloysius College Galle.</span>
            <br />
            <br />
            Technical Skills
            
          </p>

          <ul>

            <li className="about-activity">
              <ImPointRight /> UI/UX Design( Mobile Design(IOS
                & Android)
            </li>
            <li className="about-activity">
              <ImPointRight /> Website Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Wireframing and Prototyping
            </li>
            <li className="about-activity">
              <ImPointRight /> Frontend Development
            </li>

          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rasith</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
