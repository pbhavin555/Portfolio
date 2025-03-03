import React, { useState } from 'react';
import './skills.css';
import HTML from '../../../assets/html-5.png';
import CSS from '../../../assets/css-3.png';
import JS from '../../../assets/js.png';
import ReactJS from '../../../assets/science.png';
import NodeJS from '../../../assets/node-js.png';
import MongoDB from '../../../assets/mongodb.svg';

const skillData = [
  { name: "HTML", img: HTML, level: 90 },
  { name: "CSS", img: CSS, level: 75 },
  { name: "JavaScript", img: JS, level: 70 },
  { name: "ReactJS", img: ReactJS, level: 70 },
  { name: "NodeJS", img: NodeJS, level: 30 },
  { name: "MongoDB", img: MongoDB, level: 60 }
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id='skills'>
      <h1 className='skillTitle'>My Skills</h1>
      <p className='skillDesc'>
        I am a passionate web developer with experience in designing and building visually appealing, user-friendly websites.
      </p>
      <div className='skillContainer'>
        {skillData.map((skill, index) => (
          <div
            key={index}
            className='skillBar'
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <img src={skill.img} alt={skill.name} className='skillBarImg' />
            <div className='skillBarText'>
              <h2>{skill.name}</h2>
            </div>
            {hoveredSkill === skill.name && (
              <div className="progressBar">
                <div className="progressFill" style={{ width: `${skill.level}%` }}>
                  {skill.level}%
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
