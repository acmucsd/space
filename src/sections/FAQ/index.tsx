import Faq from '../../components/Faq/index';
import faqData from './faq.jsx';
import s from './style.module.scss';

const Raccoon = "/asset/raccoon3.svg";
const RaccoonHands = "/asset/raccoon3-hands.svg";

const FAQ: React.FC = () => {
  return (
    <section className={s.container} id="faq">
      <div className={s.content}>
        <h2 className={s.title}>FAQs</h2>
        <img src={Raccoon} alt="" className={s.raccoon} />
        <img src={RaccoonHands} alt="" className={s.raccoonHands} />
        <Faq data={faqData.students} />
      </div>
    </section>
  );
};

export default FAQ;
