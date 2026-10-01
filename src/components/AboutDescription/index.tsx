import Typist from "react-text-typist";
import s from "./style.module.scss";

const AboutDescription: React.FC = () => {
  return (
    <div className={s.container}>
      <div className={s.headerWrapper}>
        <Typist
          className={s.header}
          sentences={['Shoot for the stars', 'Achieve your dreams']}
          typingSpeed={70}
          loop={true}
          startDelay={2000}
          pauseTime={5000}
          cursorSmooth
          deletingSpeed={60}
          hideCursorOnFinish
        />
      </div>
      <p className={s.description}>
      Through SPACE, students and recruiters can connect and interact with each other regarding professional opportunities such as internships, full or part-time positions, and student programs.
      <br />
      <br />
      This year, SPACE will also feature a resume review, professional headshot, and intern panel stations, giving students even more ways to prepare for and make the most of their opportunities. Sign up to reserve a time slot and share your resume with our sponsors!
      </p>
    </div>
  );
};

export default AboutDescription;
