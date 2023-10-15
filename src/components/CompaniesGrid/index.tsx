import s from "./style.module.scss";
import companies from "./companies_2023.json"

const CompaniesGrid: React.FC = () => {
  return (
    <div className={s.container}>
      {companies.map((company, index) => (
        <a className={s.companyItem} key={index} href={company.link}>
          <img src={company.logo} className={s.companyLogo} alt={company.alt} />
          <h5 className={s.companyName}>{company.name}</h5>
        </a>
      ))}
    </div>
  );
};

export default CompaniesGrid;
