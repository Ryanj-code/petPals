import { FaLaptopCode } from "react-icons/fa";
import {
  Container,
  AboutHeader,
  Section,
  AboutText,
  HighlightSpan,
  SubHeader,
  SkillContainer,
  SkillIcons,
} from "../styles/AboutStyles";
import AboutContact from "./AboutContact";

const About = () => {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
    "Node.js",
    "RESTful APIs",
    "State Management",
    "Responsive Design",
  ];

  return (
    <Container>
      <AboutHeader>About Me</AboutHeader>
      <Section>
        <AboutText>
          Hello, I'm <HighlightSpan>Ryan Jiang</HighlightSpan>, a Computer
          Science student at Hunter College with a passion for learning and
          building new things. I'm constantly exploring new technologies and
          approaches to expand my skillset. I want to get better at building
          efficient and scalable applications.
        </AboutText>
      </Section>

      <Section>
        <SubHeader>Relevant Experience</SubHeader>
        <AboutText>
          I have experience in{" "}
          <HighlightSpan>web development & UI/UX design</HighlightSpan>, working
          with{" "}
          <HighlightSpan>
            React, TypeScript, modern web technologies, and Figma
          </HighlightSpan>
          . My experience includes creating a{" "}
          <HighlightSpan>snippet manager</HighlightSpan> and interning as a{" "}
          <HighlightSpan>UI/UX designer </HighlightSpan> at Unadat letting me
          have knowledge in relevant topics regarding web development.
        </AboutText>
      </Section>

      <Section>
        <SubHeader>Relevant Skills & Technologies</SubHeader>
        <SkillContainer>
          {skills.map((skill) => (
            <SkillIcons key={skill}>
              <FaLaptopCode /> {skill}
            </SkillIcons>
          ))}
        </SkillContainer>
      </Section>

      <Section>
        <SubHeader>Get In Touch</SubHeader>
        <AboutContact />
      </Section>
    </Container>
  );
};

export default About;
