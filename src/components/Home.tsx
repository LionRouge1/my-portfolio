import Name from './Name';
import Contact from './Contact';
import '../styles/home.scss';
import ProjectList from './ProjectList';
import AboutMe from './AboutMe';
import { Ell15, Ell8, Ell14, Group1, Group2, Group3, Group4, Group5 } from './Design';
import DeleteWriter from './deleteWriter';
import SocialMedia from './SocialMedia';

const jobTilles = ['Software Engineer', 'Full-stack Developer', 'Software Developer', 'Front-end Developer', 'Back-end Developer'];
const Home = () => (
  <>
    <section className="about-me" id='home'>
      <div className="group">
        <Group1 />
        <Group2 />
        <Group3 />
        <Ell8 />
        <Ell14 />
        <Ell15 />
        <Group4 />
        <Group5 />
      </div>

      <div className="content">
        <Name />
        <p>
          I’m a <DeleteWriter titles={ jobTilles } /> I can help you build a product, feature
          or website Look through some of my work and experience! If you like
          what you see and have a project you need coded, don’t hesitate to
          contact me.
        </p>
        <a href="/contact">LET’S CONNECT</a>
        <SocialMedia />
      </div>
    </section>
    <ProjectList />
    <AboutMe />
    <section className="footer">
      <Contact />
    </section>
  </>
);

export default Home;