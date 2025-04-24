import { project } from '../types';
import Project from './Project';
import '../styles/projects.scss';
import reme1 from '../assets/images/re-me1.png';
import reme2 from '../assets/images/re-me2.jpg';
import reme3 from '../assets/images/re-me3.jpg';
import vshotD from '../assets/images/vshotD.png';
import vshotM from '../assets/images/vshotM.png';
import vshotDashboardD from '../assets/images/vshotDashboardD.png';
import vshotDashboardM from '../assets/images/vshotDashboardM.png';
import nexoraD from '../assets/images/nexoraD.png';
import nexoraM from '../assets/images/nexoraM.png';
import nexoraPaymentD from '../assets/images/nexoraPaymentD.png';
import nexoraPaymentM from '../assets/images/nexoraPaymentM.png';
import sibeD from '../assets/images/sibeD.png';
import sibeM from '../assets/images/sibeM.png';
// import exchangeM from '../assets/images/exchangeMb.png';
// import exchangeD from '../assets/images/exchange.png';
// import exchangeD1 from '../assets/images/exchangeD1.png';
// import exchangeM1 from '../assets/images/exchangeM1.png';
// import exchangeM2 from '../assets/images/exchangeM2.png';
import budgetM from '../assets/images/budgetcategorieMb.png';
import budgetD from '../assets/images/budgetcategorie.png';
import schoolM from '../assets/images/schoolManagement.png';
import { useContext, useEffect } from 'react';
import { ViewContext } from './context/getviewContext';

const ProjectList = () => {
  const projects: project[] = [
    {
      id: 1,
      name: ['Nexora', 'Nexora Solution', 'Full Stack Dev', '2025'],
      description: 'Nexora is a branding and marketing agency that specializes in creating unique and effective branding solutions for businesses. The agency offers a range of services, including logo design, website development, social media management, and digital marketing. Nexora is dedicated to helping businesses establish a strong online presence and connect with their target audience through innovative branding strategies.',
      featuredImage: [nexoraM, nexoraD, nexoraPaymentD, nexoraPaymentM],
      technologie: ['React', 'MySQL', 'Typescript', 'Tailwind CSS', 'PHP'],
      link: ['https://nexoragh.com/']
    },
    {
      id: 2,
      name: ['VirtualShotAI', 'Crowdfrica', 'Full Stack Dev', '2024'],
      description: 'VirtualShotAI is a web application that allows users to create and edit their own virtual shots using AI technology. Users can upload their own photos, select a virtual background, and customize their shots with various filters and effects. The application uses machine learning algorithms to enhance the quality of the images and provide users with a seamless editing experience.',
      featuredImage: [vshotM, vshotD, vshotDashboardD, vshotDashboardM],
      technologie: ['Next.js', 'PostgreSQL', 'Typescript', 'Tailwind CSS', 'Node.js'],
      link: ['https://www.virtualshotai.com/']
    },
    {
      id: 3,
      name: ['SIBE Consult', 'Global-SIBE Consult', 'Software Engineer', '2024'],
      description: 'SIBE Consult is a consulting firm that specializes in providing strategic and operational support to businesses in various industries. The firm offers a range of services, including business strategy development, process improvement, and project management. SIBE Consult is dedicated to helping businesses achieve their goals and improve their performance through effective consulting solutions.',
      featuredImage: [sibeM, sibeD],
      technologie: ['Wordpress', 'MySQL', 'JavaScript', 'HTML/CSS', 'PHP'],
      link: ['https://sibeconsult.com/']
    },
    {
      id: 4,
      name: ['Re Me', 'CodLab', 'Full Stack Dev', '2023'],
      description: 'RE-ME is a Chrome extension that helps easily bookmark valuable content that you come across, saving it to your personal library for later. Re-Me then sends you periodic reminders, ensuring you make the most of your downtime by revisiting and absorbing the wealth of knowledge you created for yourself!',
      featuredImage: [reme1, reme2, reme3],
      technologie: ['Next', 'Typescrip', 'JavaScript', 'Ruby on Rails'],
      link: ['https://chromewebstore.google.com/detail/re-me/aneophmeaepdcjleicjgehfogheojdge?pli=1', 'https://github.com/Colab19-Team7']
    },
    // {
    //   id: 2,
    //   name: ['Currency Rate', 'SELF-EMPLOYED', 'Front End Dev', '2022'],
    //   description: 'CURRENCY RATE is web site that help:<br />- View foreign exchange rates and use currency exchange rate calculator for more than 150 foreign currencies.<br>- Calculate live currency and foreign exchange rates and  Currency Convertion.<br>- Convert between all major global currencies.',
    //   featuredImage: [exchangeD, exchangeD1, exchangeM, exchangeM1, exchangeM2],
    //   technologie: ['React', 'Redux'],
    //   link: ['https://currencyrates1.netlify.app/', 'https://github.com/LionRouge1/Currency_Exchange.git']
    // },
    // {
    //   id: 3,
    //   name: ['Budget App', 'SELF-EMPLOYED', 'Back End Dev', '2022'],
    //   description: 'BudgetApp is mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
    //   featuredImage: [budgetM, budgetD],
    //   technologie: ['html', 'css', 'Ruby on rails'],
    //   link: ['https://budgetapplion.herokuapp.com/', 'https//link-to-source-version']
    // },
    // {
    //   id: 4,
    //   name: ['School Management', 'Stephen', 'Full Stack Dev', '2022'],
    //   description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.<br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus voluptates adipisci nobis. Adipisci blanditiis nesciunt hic modi quas quos recusandae cum ab officia iusto non ratione consequatur natus, illum assumenda.',
    //   featuredImage: [schoolM, schoolM],
    //   technologie: ['html', 'css', 'PHP', 'javaScript'],
    //   link: ['https://github.com/LionRouge1/schoolManagement', '']
    // }
  ];
  const observerFn = useContext(ViewContext);
  const observer = observerFn((entries) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        const image = entry.target.querySelector('.snapshoot');
        const details = entry.target.querySelector('.detail');
        image.style.opacity = '1';
        image.style.transform = 'translateX(0%)';
        details.style.opacity = '1';
        details.style.transform = 'translateY(0%)';
      } else {
        const image = entry.target.querySelector('.snapshoot');
        const details = entry.target.querySelector('.detail');
        const right = entry.target.querySelector('.order');
        image.style.opacity = '0';
        if (right) image.style.transform = 'translateX(400px)';
        else image.style.transform = 'translateX(-400px)';
        details.style.opacity = '0';
        details.style.transform = 'translateY(400px)';
      }
    })
  });

  useEffect(() => {
    const projects = document.querySelectorAll<HTMLElement>('.works > article');

    projects.forEach((project) => {
      const image = project.querySelector('.snapshoot') as HTMLElement;
      const right = project.querySelector('.order') as HTMLElement;
      const details = project.querySelector('.detail') as HTMLElement;
      image.style.opacity = '0';
      if (right) image.style.transform = 'translateX(400px)';
      else image.style.transform = 'translateX(-400px)';
      details.style.opacity = '0';
      details.style.transform = 'translateY(400px)';
      observer.observe(project);
    });
  }, []);

  return (
    <section className="works" id='projects'>
      {
        projects.map(({
          id,
          name,
          description,
          featuredImage,
          technologie,
          link
        }: project) => (
          <Project
            key={id}
            id={id}
            name={name}
            description={description}
            featuredImage={featuredImage}
            technologie={technologie}
            projectLink={link}
          />
        ))
      }
    </section>
  )
};

export default ProjectList;