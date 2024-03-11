import '../styles/thanks.scss'
import NotFound from './NotFound';
import SocialMedia from './SocialMedia';
import { useLocation, useNavigate } from 'react-router-dom';

const Thanks = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  if(location.state) {
    return (
      <section className="thanks">
        <p>
          Thanks for reaching out. I appreciate your patience and will respond promptly.
          In the meantime, feel free to connect with me on my social media channels
        </p>
        <SocialMedia />
      </section>
    )
  };

  return <NotFound />
};

export default Thanks;