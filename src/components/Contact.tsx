import '../styles/contact.scss';
import { useForm } from '@formspree/react';
import { Ell8, Group1, Group2, Group3 } from './Design';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [state, handleSubmit] = useForm("mjvnookq");
  const navigate = useNavigate();
  if (state.succeeded) {
    navigate('/thanks', {state: {sendMail: true}});
  }

  return (
  <section className="contact-me" id='contact'>
    <div className="group">
      <Group1 />
      <Group2 />
      <Group3 />
      <Ell8 />
    </div>
    <div className="text">
      <h2>Contact Me</h2>
      <p>
        Whether you're a fellow developer looking for a collaborator, a business owner with a software project in mind, or just someone interested in discussing tech, don't hesitate to reach out.
        I look forward to connecting with you and exploring how we can work together to bring your ideas to life.
        Feel free to get in touch with me to discuss your software development needs.
      </p>
    </div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        maxLength={30}
        name="name"
        placeholder="Enter your full name"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your Enter your email address"
        required
      />
      <textarea
        cols={30}
        rows={7}
        maxLength={500}
        name="message"
        placeholder="Write your message here..."
        required
      />
      <button type="submit" className="btn" disabled={state.submitting}>Get In Touch</button>
      <span id="errorMessage" />
    </form>
  </section>
)};

export default Contact;