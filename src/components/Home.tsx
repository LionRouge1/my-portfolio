import Name from './Name';
import { FaSquareXTwitter, FaLinkedin, FaAngellist } from 'react-icons/fa6';
import { FaMedium, FaGithubSquare } from 'react-icons/fa';
import '../styles/home.scss';
import ProjectList from './ProjectList';

const Home = () => {
  return (
    <>
      <section className="about-me">
        <div className="group">
          <div className="group1">
            <div className="ell-3">
              <svg width="145" height="101" viewBox="0 0 52 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M98.2411 26.9701C94.1949 19.7876 88.5141 13.659 81.6588 9.08033C74.8034 4.5017 66.9662 1.6018 58.7816 0.615434C50.5971 -0.370932 42.2953 0.583959 34.5484 3.40279C26.8016 6.22162 19.8274 10.8252 14.1906 16.8407C8.5538 22.8562 4.41283 30.1145 2.10297 38.0281C-0.206881 45.9416 -0.620695 54.2879 0.895036 62.3911C2.41077 70.4944 5.81344 78.1268 10.8275 84.6703C15.8416 91.2139 22.3262 96.4848 29.7563 100.056L39.5429 79.6952C35.31 77.6606 31.6158 74.6578 28.7592 70.9299C25.9027 67.2021 23.9642 62.8539 23.1007 58.2375C22.2372 53.6211 22.4729 48.8662 23.7889 44.3579C25.1048 39.8496 27.4639 35.7145 30.6752 32.2874C33.8864 28.8604 37.8596 26.2378 42.273 24.6319C46.6864 23.026 51.4159 22.482 56.0786 23.044C60.7414 23.6059 65.2062 25.258 69.1117 27.8664C73.0172 30.4748 76.2535 33.9663 78.5587 38.0582L98.2411 26.9701Z" fill="#6070FF" />
              </svg>
            </div>
            <div className="rect-4">
              <svg width="110" height="67" viewBox="0 0 81 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="47.79" width="95.5804" height="22.021" transform="rotate(-30 0 47.79)" fill="#EBEBFF" />
              </svg>
            </div>
          </div>
          <div className="group2">
            <div className="rect-6">
              <svg width="9" height="44" viewBox="0 0 9 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="-34" y="37.4868" width="51.9898" height="9.30073" transform="rotate(-46.1415 -34 37.4868)" fill="#EBEBFF" />
              </svg>
            </div>
            <div className="ell-11">
              <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-11.8095 0.641908C-13.8144 5.33769 -13.8718 10.6376 -11.969 15.3757C-10.0663 20.1137 -6.35924 23.9019 -1.66346 25.9068C3.03231 27.9117 8.3322 27.969 13.0703 26.0663C17.8084 24.1635 21.5965 20.4565 23.6014 15.7607L-11.8095 0.641908Z" fill="#6070FF" />
              </svg>
            </div>
          </div>
          <div className="group3">
            <div className="rect-7">
              <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="26.4618" height="4.7339" transform="matrix(0.757375 0.65298 0.65298 -0.757375 0.18457 3.58533)" fill="#6070FF" />
              </svg>
            </div>
            <div className="ell-5">
              <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="5.30398" cy="6.21088" rx="5.5" ry="5" transform="rotate(52.9708 5.30398 6.21088)" fill="#CBCDFF" />
              </svg>
            </div>
          </div>
          <div className="ell-8">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7.5" cy="7.5" r="7" fill="white" stroke="#CBCDFF" />
            </svg>
          </div>
          <div className="ell-14">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5.5" cy="5.5" r="5" fill="white" stroke="#CBCDFF" />
            </svg>
          </div>
          <div className="ell-15">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7.5" cy="7.49988" r="7" fill="white" stroke="#CBCDFF" />
            </svg>
          </div>
          <div className="group4">
            <div className="ell-12">
              <svg width="25" height="13" viewBox="0 0 25 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.496961 -0.000453654C0.278167 3.19352 1.33714 6.3436 3.44091 8.75679C5.54468 11.17 8.52093 12.6486 11.7149 12.8674C14.9089 13.0862 18.059 12.0272 20.4722 9.92347C22.8853 7.8197 24.364 4.84345 24.5828 1.64948L0.496961 -0.000453654Z" fill="#6070FF" />
              </svg>
            </div>
            <div className="ell-13">
              <svg width="31" height="26" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.9067 25.4993C28.4263 23.6894 29.4982 21.5472 30.0358 19.246C30.5734 16.9448 30.5616 14.5493 30.0012 12.2535C29.4408 9.95778 28.3477 7.82624 26.8103 6.03152C25.2729 4.2368 23.3345 2.82935 21.152 1.92312C18.9695 1.01689 16.6043 0.637356 14.2478 0.815252C11.8914 0.993148 9.60991 1.72347 7.58819 2.94709C5.56648 4.17071 3.86134 5.85322 2.61082 7.85841C1.3603 9.86359 0.599568 12.1351 0.390208 14.489L6.84065 15.0627C6.95992 13.7217 7.39331 12.4276 8.10573 11.2853C8.81815 10.1429 9.78957 9.18438 10.9413 8.48729C12.0931 7.79019 13.3928 7.37413 14.7353 7.27278C16.0778 7.17144 17.4253 7.38765 18.6686 7.90393C19.912 8.42021 21.0163 9.22204 21.8922 10.2445C22.768 11.2669 23.3908 12.4813 23.71 13.7892C24.0292 15.0971 24.036 16.4618 23.7297 17.7727C23.4235 19.0837 22.8128 20.3042 21.9471 21.3353L26.9067 25.4993Z" fill="#EBEBFF" />
              </svg>
            </div>
          </div>
          <div className="group5">
            <div className="ell-4">
              <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10.0956" r="10" fill="#6070FF" />
              </svg>
            </div>
            <div className="rect-5">
              <svg width="68" height="39" viewBox="0 0 68 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4.82422" y="-0.00012207" width="68.0631" height="12.1762" transform="rotate(23.34 4.82422 -0.00012207)" fill="#EBEBFF" />
              </svg>
            </div>
          </div>
        </div>

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
      <ProjectList />
    </>
  );
};

export default Home;