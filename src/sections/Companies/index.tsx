import CompaniesGrid from 'src/components/CompaniesGrid';
import SupportingSponsorsGrid from 'src/components/SupportingSponsorsGrid';
import s from './style.module.scss';

const Companies: React.FC = () => {
  return (
    <section className={s.container} id="companies">
      <h1>Participating Companies</h1>
      <CompaniesGrid />
      <h1>Supporting Sponsors</h1>
      <SupportingSponsorsGrid />
      <a className={s.sponsorButton} href="https://acmurl.com/space-company-registration">
        Become a Sponsor
      </a>
    </section>
  );
};

export default Companies;
