import { useContext, useEffect, useState } from 'react';
import { ViewContext } from './context/getviewContext';

const Name = () => {
  const getview = useContext(ViewContext);
  const [name, setName] = useState('');
  // const text = "I’m Matchoudi, Glad to see you!";
  const typeWriter = async ( text:String, counter = 0) => {
    let speed = 200;
    if (counter < text.length) {
      setName((prev) => (prev = prev + text.charAt(counter)));
      setTimeout(() => { typeWriter(text, counter += 1) }, speed);
    } else {
      return setName("I’m Matchoudi, Glad to see you!");
    }
  }

  useEffect(() => {
    typeWriter("I’m Matchoudi, Glad to see you!");
  }, []);

  return (
    <h1 className="name">{name}
      <span>|</span>
    </h1>
  );
};

export default Name;