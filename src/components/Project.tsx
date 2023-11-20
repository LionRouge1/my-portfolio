import { useState } from 'react';
// import { ViewContext } from './context/getviewContext';
import { ProjectProps } from '../types';
import DetailPopUp from './DetailPopUp';

const Project = ({
  id,
  name,
  description,
  featuredImage,
  technologie,
  projectLink
}: ProjectProps) => {
  const [state, setState] = useState(false);
  const handleButton = () => {
    setState(false)
  };
  const screenWidth = window.screen.width;

  if (state) return (
    <DetailPopUp
    name={name}
    projectLink={projectLink}
    description={description}
    featuredImage={featuredImage}
    technologie={technologie}
    id={id}
    closeWindow = { handleButton }
  />
  );

  return (
    <article>
      <div className={`snapshoot ${(id % 2 === 0) ? 'order' : ''}`}>
        <img src={screenWidth < 700 ? featuredImage[0] : featuredImage[1]} alt={name[0]} />
      </div>
      <div className="detail">
        <h2>{name[0]}</h2>
        <ul className="frame">
          <li><h3>{name[1]}</h3></li>
          <li><span className="dot" /></li>
          <li><h3 className="role">{name[2]}</h3></li>
          <li><span className="dot" /></li>
          <li><h3 className="year">{name[3]}</h3></li>
        </ul>
        <p className="text" dangerouslySetInnerHTML={{ __html: description }} />
        <ul className="lang">
          {
            technologie.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))
          }
        </ul>
        <button type="button" className="btn" onClick={() => setState(true)}>See Project</button>
      </div>
    </article>
  );
}

export default Project;