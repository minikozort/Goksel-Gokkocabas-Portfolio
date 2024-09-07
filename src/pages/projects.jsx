import React from 'react';

const individualProjects = [
  {
    title: "HTML - CSS - JavaScript",
    link: "https://minikozort.github.io/My-Daily-Blog/",
    imgSrc: "/Assets/Pics/My-Daily-Blog.PNG",
    imgAlt: "My Daily Blog",
    github: "https://github.com/minikozort/My-Daily-Blog.git"
  },
  {
    title: "HTML - CSS - JavaScript",
    link: "https://minikozort.github.io/Tasks-Management-App/",
    imgSrc: "/Assets/Pics/Task-Management-App.PNG",
    imgAlt: "Task Management App",
    github: "https://github.com/minikozort/Tasks-Management-App.git"
  },
  {
    title: "HTML - CSS - JavaScript - API",
    link: "https://minikozort.github.io/My-Weather-Forecast-App/",
    imgSrc: "/Assets/Pics/Weather-Forecast-App.PNG",
    imgAlt: "Weather Forecast App",
    github: "https://github.com/minikozort/My-Weather-Forecast-App.git"
  },
  {
    title: "Full-Stack App",
    link: "https://tech-blog-mvc-e0ny.onrender.com",
    imgSrc: "/Assets/Pics/MVC-Main-Page.PNG",
    imgAlt: "Tech Blog",
    github: "https://github.com/minikozort/Tech-Blog-MVC.git"
  },
  {
    title: "NoSQL - Express - Node.js",
    link: "https://www.loom.com/share/60e91980c947490e8d766780f90e8bf3?sid=56d4a4ce-342f-4825-817f-52c7e12bd3cc",
    imgSrc: "/Assets/Pics/My Friends Network Get All Users.PNG",
    imgAlt: "My Friend's Network",
    github: "https://github.com/minikozort/My-Friend-s-Network.git"
  }
];

const groupProjects = [
  {
    title: "HTML - CSS - JavaScript - API",
    link: "https://minikozort.github.io/Marvel-to-Media/",
    imgSrc: "/Assets/Pics/Marvel-to-Media-Webpage.png",
    imgAlt: "Marvel to Media",
    github: "https://github.com/minikozort/Marvel-to-Media.git"
  },
  {
    title: "JavaScript - Express - Handlebars",
    link: "https://crypto-currently.onrender.com/",
    imgSrc: "/Assets/Pics/Crypto-Currently.png",
    imgAlt: "Crypto Currently",
    github: "https://github.com/wilsacker/Crypto-Currently.git"
  }
];

export default function Projects() {
  return (
    <div>
      <header className="projects">
        <h1>Welcome to my projects page!</h1>
        <p>You can see my journey as a software engineer during the bootcamp experience. Please feel free to hop from project to project.</p>
      </header>

      <div>
        <h1 className="individual-project-title">Individual Projects</h1>
        <section className="indent-2">
          {individualProjects.map((project, index) => (
            <div className="content" key={index}>
              <h2>{project.title}</h2>
              <a href={project.link}>
                <img className="img2" src={project.imgSrc} alt={project.imgAlt} />
              </a>
              <a className="github" href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          ))}
        </section>
      </div>

      <section className="group-projects">
        <h1 className="group-project-title">Group Projects</h1>
        <div className="indent-2">
          {groupProjects.map((project, index) => (
            <div className="content" key={index}>
              <h2>{project.title}</h2>
              <a href={project.link}>
                <img className="img2" src={project.imgSrc} alt={project.imgAlt} />
              </a>
              <a className="github" href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
