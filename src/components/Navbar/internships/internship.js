import React from 'react';
import './internship.css';

// Internship data
const internships = [
  {
    company: "Gujarat Informatics Limited GIL",
    role: "ReactJS Developer Intern",
    logo: require("../../../assets/GILlogo.jpeg"), 
    duration: "March 2023 - May 2023",
    description:
      "Implemented modern UI/UX design principles for improved user experience. Developed interactive web applications using ReactJS, Redux, JavaScript, HTML5, and CSS3. Collaborated with backend developers to integrate RESTful APIs for seamless data exchange. Used Postman for testing and debugging APIs, ensuring accurate data flow. Participated in code reviews to maintain high-quality standards.",
  },
  {
    company: "BrainyBeams Pvt Ltd",
    role: "Web Developer Intern",
    logo: require("../../../assets/brainybeamslogo.png"), 
    duration: "June 2022 - July 2022",
    description:
      "Developed a sentiment-based recommender system for e-commerce and OTT platforms, enhancing product recommendations. Gained hands-on experience in data science and machine learning, focusing on practical tools and system development.",
  }
];

const InternshipSection = () => {
  return (
    <section id="internship">
      <h2 className="internshipTitle">Internships</h2>
      <div className="internshipContainer">
        {internships.map((internship, index) => (
          <div key={index} className="internshipCard">
            <div className="internshipHeader">
              <img src={internship.logo} alt={`${internship.company} logo`} className="internshipLogo" />
              <h3 className="internshipCompany">{internship.company}</h3>
            </div>
            <h4 className="internshipRole">{internship.role}</h4>
            <p className="internshipDate">{internship.duration}</p>
            <p className="internshipDescription">{internship.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InternshipSection;


