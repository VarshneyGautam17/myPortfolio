import React from 'react';
import "../Styles/AboutMe.css";

function AboutMe() {
  return (
    <div id='aboutme' className='aboutme pt-4'>
            <h2 className='text-start mb-4 ms-2'>
                <span className='p-2' style={{borderRight:"5px solid black",borderBottom:"5px solid black",borderRadius:"2rem 2rem 0rem 2rem",color:"white",boxShadow:"4px 4px 4px white"}}>
                About Me
                </span>
                </h2>
        <div className='container px-5 py-2'>
              <h4>Hey there! I'm <span style={{color:"black"}}>
                Gautam Varshney
               </span>, a
               Full Stack Developer at
                <span style={{color:"black"}}> Nirwana.ai
                </span> and an MCA graduate.</h4>
                 <p>👋 Welcome to my portfolio!</p>
            <p className="paragraph_aboutme">
            I'm a web developer focused on building reliable, maintainable full-stack applications. I enjoy turning UI/UX designs into responsive, accessible interfaces and solving real-world problems with clean code.
            </p>
            <p className="paragraph_aboutme">
            Experience: I have worked across frontend and backend technologies, contributing to production applications and internal tools. I focus on performance, code organization, and delivering polished user experiences.
            </p>
            <p className="paragraph_aboutme">
            Development: I transform design concepts into production-ready code using HTML, modern CSS, JavaScript (ES6+), React, and supporting backend technologies (Node.js, REST APIs, databases).
            </p>
            <p className="paragraph_aboutme">
            UI/UX: I prioritize semantic HTML, responsive layouts, and accessibility to ensure interfaces are usable across devices and by all users.
            </p>
            <p className="paragraph_aboutme">
            Continuous learning is important to me — I keep up with new patterns, libraries, and best practices to improve the projects I work on.
            </p>
            <div className='paragraph_aboutme'>
              <strong>Skills</strong>
              <ul style={{color:"white",listStyle:"none",textAlign:"left"}}>
                <li> <strong>Languages:</strong> C/C++, Java, HTML5, CSS3, JavaScript (ES6+)</li>
                <li> <strong>Frontend:</strong> React.js, Redux, React Query, Inertia.js, Canvas API, Bootstrap</li>
                <li> <strong>Backend & Data:</strong> Node.js, Express, MongoDB, MySQL, REST APIs</li>
                <li> <strong>Tools & Libraries:</strong> Axios, Formik, Yup, Chart.js, Swiper, JSON</li>
                <li> <strong>Workflow:</strong> Git, responsive design, performance optimization, unit testing basics</li>
              </ul>
            </div>
            <p className='paragraph_aboutme'>🌐 Connect with me to discuss projects, collaboration, or open roles.</p>
        </div>
    
    </div>
  )
}

export default AboutMe