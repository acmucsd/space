import CompaniesGrid from "src/components/CompaniesGrid";
import s from "./style.module.scss";

const Companies: React.FC = () => {
  return (
    <section className={s.container}>
      <div className={s.content}>
        <h1>Participating Companies</h1>
        <CompaniesGrid />
      </div>
    </section>
  );
};

export default Companies;
