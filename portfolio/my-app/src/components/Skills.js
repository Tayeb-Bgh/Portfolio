import React from 'react';
import SkillCard from './SkillCard';


function Skills() {
  const skills = [
    {
      title: 'HTML',
      logo: '/assets/html.svg?height=100&width=100',
      description: 'The foundation of web development for structuring content.'
    },
    {
      title: 'CSS',
      logo: '/assets/css.svg?height=100&width=100',
      description: 'Styling web pages to create visually appealing designs.'
    },
    {
      title: 'JavaScript',
      logo: '/assets/javascript.svg?height=100&width=100',
      description: 'Creating dynamic and interactive web applications.'
    },
    {
      title: 'React',
      logo: '/assets/react.svg?height=100&width=100',
      description: 'Building component-based user interfaces for modern web apps.'
    },
    {
      title: 'PHP',
      logo: '/assets/php.svg?height=100&width=100',
      description: 'Creating robust, server-side applications for dynamic websites and APIs.',
    },
    {
      title: 'Express Js',
      logo: '/assets/expressjs.svg?height=100&width=100',
      description: 'Developing backend applications and APIs efficiently.'
    },
    {
      title: 'SQL',
      logo: '/assets/sql.svg?height=100&width=100',
      description: 'Managing and querying relational databases effectively.'
    },
    {
      title: 'Java',
      logo: '/assets/java.svg?height=100&width=100',
      description: 'Developing versatile applications, from desktop to enterprise solutions.',
      libraries: ['Swing', 'JavaFX'] 
    },
    {
      title: 'C',
      logo: '/assets/c.svg?height=100&width=100',
      description: 'Low-level programming for system development and performance-critical applications.',
      libraries: ['Raylib']
    },
    {
      title: 'C++',
      logo: '/assets/c++.svg?height=100&width=100',
      description: 'Advanced programming for high-performance systems and game development.',
      libraries: ['Raylib'] 
    },
  ];


  return (

    <section id='skills' className="skills-grid-container">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            description={skill.description}
            logo={skill.logo}
            libraries={skill.libraries} 
          />
        ))}
      </div>

    </section>


  );
}

export default Skills;