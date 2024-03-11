import Languages from "./Languages";
import '../styles/aboutme.scss';
import SocialMedia from "./SocialMedia";

const AboutMe = () => (
  <section className="about" id="about">
    <div className="text">
      <h1>About Myself</h1>
      <p>
        I'm a passionate and results-driven software developer with a deep love for creating efficient, user-friendly, and innovative solutions.
        With more than 7 years of experience in the industry, I've honed my skills across a wide range of technologies and platforms.<br />
        I'm dedicated to continuous learning and staying at the forefront of industry trends. My enthusiasm for problem-solving, clean coding,
        and attention to detail has driven the success of the projects I've been involved in. Whether it's optimizing code for performance or creating elegant, user-centric designs, I'm always up for the task.
      </p>
      <p className="connect-link">LET'S CONNECT</p>
      <SocialMedia />
      <a href="http://myResume" target="_blank" rel="noopener noreferrer" className="btn">Get My Resume</a>
    </div>
    <Languages />
  </section>
);

export default AboutMe;