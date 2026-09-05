import { useState, useEffect, useRef, useCallback } from "react";
import { flushSync } from "react-dom";
import s from "./style.module.scss";
import companies from "./companies_2026.json";

const MOBILE_BREAKPOINT = 768;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
};

const CompaniesGrid: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(0);
  const isMobile = useIsMobile();
  const nameRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  const handleMouseEnter = useCallback((index: number) => {
    // FLIP: record current positions before state change
    const firstPositions = nameRefs.current.map(
      ref => ref?.getBoundingClientRect().left ?? 0
    );

    // Synchronously update DOM so we can read final positions
    flushSync(() => setExpandedIndex(index));

    // Read new positions and apply inverse transform
    nameRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const lastPos = ref.getBoundingClientRect().left;
      const delta = firstPositions[i] - lastPos;
      if (Math.abs(delta) < 1) return;
      ref.style.transition = "none";
      ref.style.transform = `translateX(${delta}px)`;
    });

    // Animate to natural position
    requestAnimationFrame(() => {
      nameRefs.current.forEach(ref => {
        if (!ref) return;
        ref.style.transition = "transform 0.3s ease-out";
        ref.style.transform = "";
      });
    });
  }, []);

  useEffect(() => {
    if (isMobile) return;
    setShowDetails(-1);
    const timeout = setTimeout(() => {
      setShowDetails(expandedIndex);
    }, 150);
    return () => clearTimeout(timeout);
  }, [expandedIndex, isMobile]);

  return (
    <div className={s.container}>
      {companies.map((company, index) => {
        const isExpanded = isMobile || index === expandedIndex;
        const detailsVisible = isMobile || (index === showDetails && isExpanded);
        return (
          <div
            className={`${s.companyCard} ${isExpanded ? s.expanded : s.collapsed}`}
            key={index}
            onMouseEnter={isMobile ? undefined : () => handleMouseEnter(index)}
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
            {company.logo && (
              <div className={`${s.logoWrapper} ${isExpanded ? s.logoWrapperExpanded : s.logoWrapperCollapsed}`}>
                <img
                  src={company.logo}
                  alt={company.alt}
                  className={`${s.companyLogo} ${isExpanded ? s.logoExpanded : s.logoCollapsed}`}
                />
              </div>
            )}
            <div className={s.companyInfo}>
              <span className={`${s.sponsorTag} ${detailsVisible ? s.fadeIn : s.fadeHidden}`}>
                Sponsored in {company.sponsoredYear}
              </span>
              <h5
                ref={el => { nameRefs.current[index] = el; }}
                className={`${s.companyName} ${!isExpanded ? s.companyNameCollapsed : ''}`}
              >
                {company.name}
              </h5>
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
