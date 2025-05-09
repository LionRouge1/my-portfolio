import { IoClose } from "react-icons/io5";
import { PiGithubLogoFill } from 'react-icons/pi';
import { DetailPopUpProps } from "../types";
import '../styles/detailpopup.scss';
import Slider from "./Slider";

const DetailPopUp = ({
  name,
  description,
  featuredImage,
  technologie,
  projectLink,
  closeWindow
}: DetailPopUpProps) => (
  <div className="popup">
    <div className="popup-menu">
      <div className="popup-header">
        <div className="title">
          <h2>{name[0]}</h2>
          <ul>
            <li><h3>{name[1]}</h3></li>
            <li><span className="dot" /></li>
            <li><h3 className="role">{name[2]}</h3></li>
            <li><span className="dot" /></li>
            <li><h3 className="year">{name[3]}</h3></li>
          </ul>
        </div>
        <IoClose onClick={closeWindow} />
      </div>
      <Slider images={featuredImage} name={name[0]} />
      <div className="detail">
        <p dangerouslySetInnerHTML={{ __html: description }} />
        <div className="actions">
          <ul className="lang">
            {
              technologie.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))
            }
          </ul>
          <div className="btns">
            <a href={projectLink[0]} target="_blank" rel="noopener noreferrer" className="btn">
              See live
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C9.55229 2 10 1.55228 10 1C10 0.447715 9.55229 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM13 0C12.4477 0 12 0.447715 12 1C12 1.55228 12.4477 2 13 2H14.5858L8.29289 8.29289C7.90237 8.68342 7.90237 9.31658 8.29289 9.70711C8.68342 10.0976 9.31658 10.0976 9.70711 9.70711L16 3.41421V5C16 5.55228 16.4477 6 17 6C17.5523 6 18 5.55228 18 5V1C18 0.447715 17.5523 0 17 0H13Z" fill="#6070FF" />
              </svg>
            </a>
            <a href={projectLink[1]} target="_blank" rel="noopener noreferrer" className="btn">See source <PiGithubLogoFill /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DetailPopUp;