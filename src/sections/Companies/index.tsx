import CompaniesGrid from 'src/components/CompaniesGrid';
import s from './style.module.scss';

const Companies: React.FC = () => {
  return (
    <section className={s.container} id="companies">
      <h1>Participating Companies</h1>
      <CompaniesGrid />
    </section>
  );
};

export default Companies;
