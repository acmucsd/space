import Link from 'next/link';
import s from './style.module.scss';

const Hero: React.FC = () => {
  return (
    <>
      <div className={s.heroContainer}>
        <div className={s.heroContent}>
          <div className={s.heroTitleWrapper}>
            <img src="/asset/contrail.svg" alt="" aria-hidden="true" className={s.heroContrail} />
            <img src="/asset/hero_title_noA.svg" alt="SPACE" className={s.heroTitleLetters} />
            <img src="/asset/star_A.svg" alt="" aria-hidden="true" className={s.heroStarA} />
            <img src="/asset/raccoon1.svg" alt="" aria-hidden="true" className={s.heroRaccoon} />
          </div>
          <div className={s.heroDescription}>
            <div className={s.heroSubtitle}>ACM at UCSD&apos;s Annual Career Fair</div>
            <div className={s.heroInfo}>
              <div>
                <a
                  className={s.heroLink}
                  href="https://maps.app.goo.gl/nGE9FmsmEKr5TKeR6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Price Center East Ballroom
                </a>
              </div>
              <div>October 19th, 2026 (10am to 4pm)</div>
            </div>
            <Link
              href="https://acmurl.com/space-registration"
              target="_blank"
              className={s.heroRegisterMobile}
            >
              Register Today!
            </Link>
          </div>
          <img src="/asset/raccoon1.svg" alt="" aria-hidden="true" className={s.heroRaccoonMobile} />
        </div>

        <img src="/asset/cloud_variant1.svg" alt="" aria-hidden="true" className={s.heroCloud} />
        <img src="/asset/cloud_variant2.svg" alt="" aria-hidden="true" className={s.heroCloudTopMobile} />
        <img src="/asset/cloud_variant2.svg" alt="" aria-hidden="true" className={s.heroCloudBottomMobile} />
      </div>
    </>
  );
};

export default Hero;
