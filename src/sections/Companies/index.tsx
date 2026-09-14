import CompaniesGrid from 'src/components/CompaniesGrid';
import SupportingSponsorsGrid from 'src/components/SupportingSponsorsGrid';
import s from './style.module.scss';
import { Support } from '@mui/icons-material';

const Companies: React.FC = () => {
  return (
    <section className={s.container} id="companies">
      <h1>Participating Companies</h1>
      <CompaniesGrid />
      <h1>Supporting Sponsors</h1>
      <SupportingSponsorsGrid />
    </section>
  );
};

export default Companies;
