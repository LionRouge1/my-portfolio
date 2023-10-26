import { stack } from '../types';

const Stack = ({name, image} :stack) => (
  <li className="lang">
    <img src={image} alt={name} />
    <p>{name}</p>
  </li>
);

export default Stack;