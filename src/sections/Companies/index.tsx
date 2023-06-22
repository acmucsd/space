import CompaniesGrid from 'src/components/CompaniesGrid';
import s from './style.module.scss';

const Companies: React.FC = () => {
  return (
    <section className={s.container}>
      <h1>Participating Companies (2022)</h1>
      <CompaniesGrid />
    </section>
  );
};

export default Companies;
