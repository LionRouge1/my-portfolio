import { ProjectProps } from '../types';

const Project = ({
  id,
  name,
  description,
  featuredImage,
  technologie,
  projectLink
}: ProjectProps) => {

  return (
    <>
      <div className={`snapshoot ${(id % 2) ? 'order':''}`}>
      <img src={featuredImage[0]} alt={name[0]} />
      </div>
      <div className="detail">
        <h2>{name[0]}</h2>
        <ul className="frame">
          <li><h3>{name[1]}</h3></li>
          <li><span className="dot" /></li>
          <li><h3>{name[2]}</h3></li>
          <li><span className="dot" /></li>
          <li><h3>{name[3]}</h3></li>
        </ul>
        <p className="text">{description}</p>
        <ul className="lang">
          {
            technologie.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))
          }
        </ul>
        <button type="button" className="btn">See Project</button>
      </div>
    </>
  );
}

export default Project;