import { useContext, useEffect, useState } from 'react';
import { ViewContext } from './context/getviewContext';
import Style from '../styles/name.module.scss';

const Name = () => {
  const getview = useContext(ViewContext);
  const [state, setState] = useState(false);
  const [title, setTitle] = useState({
    name: '',
    greeting: ''
  });
  // const text = "I’m Matchoudi, Glad to see you!";
  const typeWriter = async (name:string, greeting:string, counter = 0) => {
    let speed = 200;
    if (state) {
      if (counter < greeting.length) {
        setTitle((prev) => ({
          ...prev,
          greeting: prev.greeting + greeting.charAt(counter)
        }));

        setTimeout(() => {
          typeWriter(name, greeting, counter += 1)
        }, speed);
      } else {
        setTitle((prev) => ({
          ...prev,
          greeting
        }))
      }
    } else {
      if (counter < name.length) {
        setTitle((prev) => ({
          ...prev,
          name: prev.name + name.charAt(counter)
        }));
        setTimeout(() => { typeWriter(name, greeting, counter += 1) }, speed);
      } else {
        setTitle((prev) => ({
          ...prev,
          name
        }));

        counter = 0;
        setTimeout(() => {setState(true)}, 400)
      }
    }
  }

  useEffect(() => {
    typeWriter("I'm Matchoudi.", "Glad to see you!");
  }, [state]);

  return (
    <h1 className="name">{title.name}
     {state || <span className={Style.nameCur}>|</span>} <br />
     {title.greeting} {state && <span className={Style.nameCur}>|</span>}
    </h1>
  );
};

export default Name;