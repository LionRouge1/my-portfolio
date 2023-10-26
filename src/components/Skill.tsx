import { skillProps } from "../types";

const Skill = ({ skill } :skillProps ) => (
  <div className="skill">
    <span className="symbol"><div /></span>
    <span className="txt">{skill}</span>
  </div>
);

export default Skill;