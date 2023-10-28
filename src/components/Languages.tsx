import { stack } from '../types';
import Stack from './Stack';
import { BiSolidRightArrow } from 'react-icons/bi';
import js from '../assets/images/js.png';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import php from '../assets/images/php.png';
import ruby from '../assets/images/ruby.png';
import python from '../assets/images/python.png';
import react from '../assets/images/react.png';
import redux from '../assets/images/redux.png';
import bootstrap from '../assets/images/bootstrap.png';
import ror from '../assets/images/rubyRails.png';
import laravel from '../assets/images/laravel.png';
import Skill from './Skill';
import { useState } from 'react';


const Languages = () => {
  const languages: stack[] = [
    {
      name: 'JavaScript (Node.js)',
      image: js,
    },
    {
      name: 'Ruby',
      image: ruby,
    },
    {
      name: 'HTML',
      image: html,
    },
    {
      name: 'CSS',
      image: css,
    },
    {
      name: 'PHP',
      image: php,
    },
    {
      name: 'Python',
      image: python,
    }
  ];

  const frameworks = [
    { name: 'React', image: react },
    { name: 'Redux', image: redux },
    { name: 'Bootstrap', image: bootstrap },
    { name: 'Ruby on rails', image: ror },
    { name: 'Laravel', image: laravel }
  ];

  const skills = {
    webDev: ['JavaScript', 'React', 'Redux', 'HTML5', 'CSS3', 'Python', 'Ruby', 'Rails', 'MySQL'] as string[],
    tools: ['Git', 'GitHub', 'Figma', 'Mobile/Responsive Development', 'RSpec', 'TDD', 'Chrome Dev Tools'] as string[],
    professional: ['Remote Pair-Programming', 'Teamwork', 'Mentoring', 'Network-Administration', 'System-Administration'] as string[],
  }

  const handleShow = (e:any) => {
    const element = e.target.localName == 'h3' ? e.target.parentNode : e.target.parentNode.parentNode.parentNode;
    const show = document.querySelector('.skill-box .show');
    if(element.classList.contains('show')) {
      element.classList.remove('show');
    } else {
      show?.classList.remove('show');
      element.classList.add('show');
    }
  }

  return (
    <ul className="skill-box">
      <li className="lang show">
        <h3 onClick={(e) => handleShow(e)}>Language <BiSolidRightArrow /></h3>
        <ul>
          {
            languages.map(({ name, image }, index) => (
              <Stack key={index} name={name} image={image} />
            ))
          }
        </ul>
      </li>
      <li className="fram">
        <h3 onClick={(e) => handleShow(e)}>Frameworks <BiSolidRightArrow /></h3>
        <ul>
          {
            frameworks.map(({ name, image }, index) => (
              <Stack key={index} name={name} image={image} />
            ))
          }
        </ul>
      </li>
      <li className="skills">
        <h3 onClick={(e) => handleShow(e)}>Skills <BiSolidRightArrow /></h3>
        <ul className="skls">
          <li className="web-dev">
            {
              skills.webDev.map((skill, index) => (
                <Skill key={index} skill={skill} />
              ))
            }
          </li>
          <li className="tools">
            {
              skills.tools.map((skill, index) => (
                <Skill key={index} skill={skill} />
              ))
            }
          </li>
          <li className="professional">
            {
              skills.professional.map((skill, index) => (
                <Skill key={index} skill={skill} />
              ))
            }
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Languages;