import "./styles/main-container.css";

// Components
import Countdown from "./components/Countdown";

// Icons
import { AiFillLinkedin, AiFillGithub, AiOutlineLink } from "react-icons/ai";

function App() {
  const nextYear = new Date().getFullYear() + 1;

  return (
    <div className="main-container">
      <div className="counter-container">
        <h1 className="title">
          REMAINING TO {nextYear}
        </h1>
        <Countdown />
      </div>
      <div className="links-container">
        <a
          href="https://www.linkedin.com/in/diego-%C3%A1lvarez-garc%C3%ADa/"
          target="blank"
        >
          <AiFillLinkedin className="icon" />
        </a>
        <a href="https://github.com/DiegoSt23" target="blank">
          <AiFillGithub />
        </a>
        <a href="https://portfolio-diego-alvarez.vercel.app/" target="blank">
          <AiOutlineLink />
        </a>
      </div>
    </div>
  );
}

export default App;
