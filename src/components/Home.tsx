import Name from './Name';
import { FaSquareXTwitter, FaLinkedin, FaAngellist } from 'react-icons/fa6';
import { FaMedium, FaGithubSquare } from 'react-icons/fa';


const Home = () => {
  return (
    <section className="about-me">
      <div className="content">
        <Name />
        <p>
          I’m a Software Developer I can help you build a product , feature
          or website Look through some of my work and experience! If you like
          what you see and have a project you need coded, don’t hesitate to
          contact me.
        </p>
        <a href="">LET’S CONNECT</a>
        <ul className="social_media">
          <li>
            <a href="https://twitter.com/Matchoudi1" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter /></a>
          </li>
          <li>
            <a href="https://linkedin.com/in/matchoudi" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </li>
          <li>
            <a href="https://medium.com/@matchoudiavlessi" target="_blank" rel="noopener noreferrer"><FaMedium /></a>
          </li>
          <li>
            <a href="https://github.com/LionRouge1" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
          </li>
          <li>
            <a href="https://angel.co/u/matchoudi" target="_blank" rel="noopener noreferrer"><FaAngellist /></a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;