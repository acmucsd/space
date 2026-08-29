import CompaniesGrid from 'src/components/CompaniesGrid';
import s from './style.module.scss';

const Companies: React.FC = () => {
  return (
    <section className={s.container} id="companies">
      <h1>Participating Companies</h1>
      <CompaniesGrid />
      <img src="asset/raccoon.svg" className={s.raccoon} alt="Raccoon mascot" />
      <a className={s.sponsorButton} href="https://acmurl.com/space-company-registration" target="_blank" rel="noopener noreferrer">Become a Sponsor</a>
    </section>
  );
};

export default Companies;
