import '../styles/contact.scss';

const Contact = () => {
  return (
    <section className="contact-me">
      <div className="group">
        <div className="group1">
          <div className="ell-3">
            <svg width="145" height="101" viewBox="0 0 52 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M98.2411 26.9701C94.1949 19.7876 88.5141 13.659 81.6588 9.08033C74.8034 4.5017 66.9662 1.6018 58.7816 0.615434C50.5971 -0.370932 42.2953 0.583959 34.5484 3.40279C26.8016 6.22162 19.8274 10.8252 14.1906 16.8407C8.5538 22.8562 4.41283 30.1145 2.10297 38.0281C-0.206881 45.9416 -0.620695 54.2879 0.895036 62.3911C2.41077 70.4944 5.81344 78.1268 10.8275 84.6703C15.8416 91.2139 22.3262 96.4848 29.7563 100.056L39.5429 79.6952C35.31 77.6606 31.6158 74.6578 28.7592 70.9299C25.9027 67.2021 23.9642 62.8539 23.1007 58.2375C22.2372 53.6211 22.4729 48.8662 23.7889 44.3579C25.1048 39.8496 27.4639 35.7145 30.6752 32.2874C33.8864 28.8604 37.8596 26.2378 42.273 24.6319C46.6864 23.026 51.4159 22.482 56.0786 23.044C60.7414 23.6059 65.2062 25.258 69.1117 27.8664C73.0172 30.4748 76.2535 33.9663 78.5587 38.0582L98.2411 26.9701Z" fill="#6070FF" />
            </svg>
          </div>
          <div className="rect-4">
            <svg width="110" height="67" viewBox="0 0 81 67" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="47.79" width="95.5804" height="22.021" transform="rotate(-30 0 47.79)" fill="#EBEBFF" />
            </svg>
          </div>
        </div>
        <div className="group3">
          <div className="rect-7">
            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="26.4618" height="4.7339" transform="matrix(0.757375 0.65298 0.65298 -0.757375 0.18457 3.58533)" fill="#6070FF" />
            </svg>
          </div>
          <div className="ell-5">
            <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="5.30398" cy="6.21088" rx="5.5" ry="5" transform="rotate(52.9708 5.30398 6.21088)" fill="#CBCDFF" />
            </svg>
          </div>
        </div>
        <div className="ell-8">
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10.0956" r="10" fill="#6070FF" />
          </svg>
        </div>
      </div>
      <div className="text">
        <h2>Contact Me</h2>
        <p>
          Whether you're a fellow developer looking for a collaborator, a business owner with a software project in mind, or just someone interested in discussing tech, don't hesitate to reach out.
          I look forward to connecting with you and exploring how we can work together to bring your ideas to life.
          Feel free to get in touch with me to discuss your software development needs.
        </p>
      </div>
      <form>
        <input
          type="text"
          maxLength={30}
          placeholder="Enter your full name"
          required
        />
        <input
          type="email"
          placeholder="Enter your Enter your email address"
          required
        />
        <textarea
          cols={30}
          rows={10}
          maxLength={500}
          placeholder="Write your message here..."
          required
        />
        <button type="submit" className="btn">Get In Touch</button>
        <span id="errorMessage" />
      </form>
    </section>
  );
};

export default Contact;