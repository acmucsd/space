import Faq from '../../components/Faq/index';
import faqData from './faq.jsx';
import s from './style.module.scss';

const FAQ: React.FC = () => {
  return (
    <div className={s.background} id="faq">
      <div className={s.faqContainer}>
        <h2 className={s.faqTitle}>FAQs</h2>
        <Faq data={faqData.students} />
      </div>
    </div>
  );
};

export default FAQ;
