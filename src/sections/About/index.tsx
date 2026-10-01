import StatisticsGrid from 'src/components/StatisticsGrid';
import AboutDescription from 'src/components/AboutDescription';
import s from './style.module.scss';

const About: React.FC = () => {
  return (
    <section className={s.container} id="about">
      <img src="/asset/cloud_variant2.svg" alt="" aria-hidden="true" className={s.cloudBottomLeft} />
      <img src="/asset/planet_ringed.svg" alt="" aria-hidden="true" className={s.planet} />
      <div className={s.content}>
        <StatisticsGrid />
        <div className={s.descriptionRow}>
          <AboutDescription />
          <img src="/asset/raccoon2.svg" alt="" aria-hidden="true" className={s.raccoon} />
        </div>
      </div>
    </section>
  );
};

export default About;
