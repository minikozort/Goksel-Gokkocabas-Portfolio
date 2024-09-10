import Headshot from '../assets/Pics/Headshot.jpg';
import { useOutletContext } from "react-router-dom";

/**
 * Home Component
 * Displays personal information and a headshot.
 * Allows for highlighting by clicking links, triggering a temporary highlight effect.
 */
export default function Home() {

  // Retrieve the highlighted state and setHighlighted function from the parent component context
  const [highlighted, setHighlighted] = useOutletContext();

  /**
   * handleClick function
   * Triggers a highlight effect when a link is clicked.
   * Prevents the default link behavior, sets the highlight state to true, and then resets it after 1 second.
   */
  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default action of the link
    setHighlighted(true); // Set the highlight state to true
    setTimeout(() => {
      setHighlighted(false); // Reset the highlight state after 1 second
    }, 1000);
  }

  return (
    <>
      {/* About Me Section */}
      <article id="About-me">
        {/* Section Title */}
        <h2>About Me</h2>

        {/* Personal and professional background information */}
        <p id="ptag">
          I am a seasoned professional with over 8 years of experience specializing in Supply Chain, ERP, and MRP systems. Throughout my career, I have earned multiple certifications in these fields. Currently, I excel as a purchasing and inventory specialist.
        </p>
        <p id="ptag">
          Following the completion of the Full-Stack Web Development bootcamp, I am eager to leverage my expertise in leading, planning, and delivering solutions. I prioritize effective communication and maintain a client-oriented focus to ensure optimal outcomes.
        </p>
        <p id="ptag">
          Driven by a passion for software engineering, I am committed to developing my skills in this domain. I thrive in software development and actively seek opportunities to enhance my proficiency while delivering exceptional results to employers.
        </p>
        <p id="ptag">
          Outside of work, I enjoy spending time with my family, engaging in online games, undertaking DIY projects, swimming, spearfishing, dog training, coding, and exploring various activities.
        </p>
        <p id="ptag">
          Feel free to reach out to me <a onClick={handleClick} href='#'>here</a> to discuss potential collaborations or opportunities. Let's connect and explore how we can work together to achieve our shared goals and objectives. If you would like to learn more about my projects or download my resume, please click the links in the <a onClick={handleClick} href='#'>navigation bar</a>.
        </p>

        {/* Headshot image */}
        <picture>
          <img className="img1" src={Headshot} alt="My Image" />
        </picture>
      </article>
    </>
  );
}
