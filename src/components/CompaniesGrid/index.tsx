import { useState, useEffect } from "react";
import s from "./style.module.scss";
import companies from "./companies_2026.json";

const CompaniesGrid: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(0);

  useEffect(() => {
    setShowDetails(-1);
    const timeout = setTimeout(() => {
      setShowDetails(expandedIndex);
    }, 150);
    return () => clearTimeout(timeout);
  }, [expandedIndex]);

  return (
    <div className={s.container}>
      {companies.map((company, index) => {
        const isExpanded = index === expandedIndex;
        const detailsVisible = index === showDetails && isExpanded;
        return (
          <div
            className={`${s.companyCard} ${isExpanded ? s.expanded : s.collapsed}`}
            key={index}
            onMouseEnter={() => setExpandedIndex(index)}
          >
            <a
              className={`${s.visitButton} ${isExpanded ? s.visible : s.hidden}`}
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
              <svg className={s.visitArrow} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 15L15 1M15 1H4M15 1V12" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <div className={s.companyInfo}>
              <span className={`${s.sponsorTag} ${detailsVisible ? s.fadeIn : s.fadeHidden}`}>
                Sponsored in {company.sponsoredYear}
              </span>
              <h5 className={s.companyName}>{company.name}</h5>
              <p className={`${s.companyDescription} ${detailsVisible ? s.fadeIn : s.fadeHidden}`}>
                {company.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompaniesGrid;
