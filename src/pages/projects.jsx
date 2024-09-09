import React from 'react';
import MyDailyBlog from '../assets/Pics/My-Daily-Blog.png'
import TaskManagementApp from '../assets/Pics/Task-Management-App.png'
import WeatherForecastApp from '../assets/Pics/Weather-Forecast-App.png'
import MVCMainPage from '../assets/Pics/MVC-Main-Page.png'
import MyFriendNetwork from '../assets/Pics/My-Friends-Network-Get-All-Users.png'
import MarvelToMedia from '../assets/Pics/Marvel-to-Media-Webpage.png'
import CryptoCurrently from '../assets/Pics/Crypto-Currently.png'



const individualProjects = [
  {
    title: "HTML - CSS - JavaScript",
    link: "https://minikozort.github.io/My-Daily-Blog/",
    imgSrc: MyDailyBlog,
    imgAlt: "My Daily Blog",
    github: "https://github.com/minikozort/My-Daily-Blog.git"
  },
  {
    title: "HTML - CSS - JavaScript",
    link: "https://minikozort.github.io/Tasks-Management-App/",
    imgSrc: TaskManagementApp,
    imgAlt: "Task Management App",
    github: "https://github.com/minikozort/Tasks-Management-App.git"
  },
  {
    title: "HTML - CSS - JavaScript - API",
    link: "https://minikozort.github.io/My-Weather-Forecast-App/",
    imgSrc: WeatherForecastApp,
    imgAlt: "Weather Forecast App",
    github: "https://github.com/minikozort/My-Weather-Forecast-App.git"
  },
  {
    title: "Full-Stack App",
    link: "https://tech-blog-mvc-e0ny.onrender.com",
    imgSrc: MVCMainPage,
    imgAlt: "Tech Blog",
    github: "https://github.com/minikozort/Tech-Blog-MVC.git"
  },
  {
    title: "NoSQL - Express - Node.js",
    link: "https://www.loom.com/share/60e91980c947490e8d766780f90e8bf3?sid=56d4a4ce-342f-4825-817f-52c7e12bd3cc",
    imgSrc: MyFriendNetwork,
    imgAlt: "My Friend's Network",
    github: "https://github.com/minikozort/My-Friend-s-Network.git"
  }
];

const groupProjects = [
  {
    title: "HTML - CSS - JavaScript - API",
    link: "https://minikozort.github.io/Marvel-to-Media/",
    imgSrc: MarvelToMedia,
    imgAlt: "Marvel to Media",
    github: "https://github.com/minikozort/Marvel-to-Media.git"
  },
  {
    title: "JavaScript - Express - Handlebars",
    link: "https://crypto-currently.onrender.com/",
    imgSrc: CryptoCurrently,
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
