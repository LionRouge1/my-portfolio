import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import { FaAngellist, FaMedium, FaSquareXTwitter } from "react-icons/fa6"
import Languages from "./Languages";
import '../styles/aboutme.scss';

const AboutMe = () => {
  return (
    <section className="about">
      <div className="text">
        <h1>About Myself</h1>
        <p>
          I'm a passionate and results-driven software developer with a deep love for creating efficient, user-friendly, and innovative solutions.
          With 4 years of experience in the industry, I've honed my skills across a wide range of technologies and platforms.<br />
          I'm dedicated to continuous learning and staying at the forefront of industry trends. My enthusiasm for problem-solving, clean coding, 
          and attention to detail has driven the success of the projects I've been involved in. Whether it's optimizing code for performance or creating elegant, user-centric designs, I'm always up for the task.
        </p>
        <p className="connect-link">LET'S CONNECT</p>
        <ul className="social_media">
          <li>
            <a href="https://github.com/LionRouge1" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
          </li>
          <li>
            <a href="https://linkedin.com/in/matchoudi" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </li>
          <li>
            <a href="https://angel.co/u/matchoudi" target="_blank" rel="noopener noreferrer"><FaAngellist /></a>
          </li>
          <li>
            <a href="https://twitter.com/Matchoudi1" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
          </li>

          <li>
            <a href="https://medium.com/@matchoudiavlessi" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
          </li>
        </ul>
        <a href="http://myResume" target="_blank" rel="noopener noreferrer" className="btn">Get My Resume</a>
      </div>
      <Languages />
    </section>
  );
};

export default AboutMe;