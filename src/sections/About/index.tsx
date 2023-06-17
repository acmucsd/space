import StatisticsGrid from 'src/components/StatisticsGrid';
import AboutDescription from 'src/components/AboutDescription';
import s from './style.module.scss';

const About: React.FC = () => {
  return (
    <section className={s.container} id="about">
      <div className={s.content}>
        <StatisticsGrid />
        <AboutDescription />
      </div>
    </section>
  );
};

export default About;
