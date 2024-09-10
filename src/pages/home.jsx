import Headshot  from '../assets/Pics/Headshot.jpg';
import { useOutletContext } from "react-router-dom";


export default function Home() {

  const [highlighted, setHighlighted] = useOutletContext();


  const handleClick = (e) => {
    e.preventDefault()
    setHighlighted (true)
    setTimeout(() => {
      setHighlighted(false);
    }, 1000);
  }
  return (
    <>
   <article id="About-me">
      <h2>About Me</h2>
      <p id="ptag">
        I am a seasoned professional with over 8 years of experience specializing in Supply Chain, ERP, and MRP systems. Throughout my career, I have earned multiple certifications in these fields. Currently, I excel as a purchasing and inventory specialist.
      </p>
      <p>
        Following the completion of the Full-Stack Web Development bootcamp, I am eager to leverage my expertise in leading, planning, and delivering solutions. I prioritize effective communication and maintain a client-oriented focus to ensure optimal outcomes.
      </p>
      <p>
        Driven by a passion for software engineering, I am committed to developing my skills in this domain. I thrive in software development and actively seek opportunities to enhance my proficiency while delivering exceptional results to employers.
      </p>
      <p>
        Outside of work, I enjoy spending time with my family, engaging in online games, undertaking DIY projects, swimming, spearfishing, dog training, coding, and exploring various activities.
      </p>
      <p>
        Feel free to reach out to me <a onClick = { handleClick } href='#'>here</a> to discuss potential collaborations or opportunities. Let's connect and explore how we can work together to achieve our shared goals and objectives. If you would like to learn more about my projects or download my resume, please click the links in the <a onClick = { handleClick } href='#'> navigation bar</a>.
        </p>
      <picture>
        <img className="img1" src={Headshot} alt="My Image" />
      </picture>
    </article>
    </>
  );
}
