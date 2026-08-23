import { useEffect, useRef, useState } from 'react';
import s from './style.module.scss';
import { Dialog } from '@mui/material';
import Link from 'next/link';

const pages = [
  {
    name: 'About',
    link: '/#about',
  },
  {
    name: 'Registration',
    link: 'https://acmurl.com/space-registration',
  },
  {
    name: 'FAQ',
    link: '/#faq',
  },
  {
    name: 'Companies',
    link: '/#companies',
    externalLink: true,
  },
];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileOpen = () => {
    setMobileOpen(true);
  };

  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, []);

  const navWrapperRef = useRef<HTMLElement>(null);
  const navBarRef = useRef<HTMLDivElement>(null);
  const [navScale, setNavScale] = useState(1);

  // when the mid svg reaches minimum size, then we start scaling the whole bar down
  useEffect(() => {
    const updateScale = () => {
      if (!navWrapperRef.current || !navBarRef.current) return;
      const wrapperStyle = window.getComputedStyle(navWrapperRef.current);
      const paddingLeft = parseFloat(wrapperStyle.paddingLeft) || 0;
      const paddingRight = parseFloat(wrapperStyle.paddingRight) || 0;
      const availableWidth = navWrapperRef.current.clientWidth - paddingLeft - paddingRight;
      const naturalWidth = navBarRef.current.offsetWidth;
      setNavScale(naturalWidth > 0 ? Math.min(1, availableWidth / naturalWidth) : 1);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, [width]);

  if (width > 768) { // desktop
    return (
      <>
        <div className={s.topVignette} aria-hidden="true" />
        <nav className={s.navWrapper} ref={navWrapperRef} style={{ overflow: "hidden" }}>
          <div className={s.navBar} ref={navBarRef} style={{ transform: navScale < 1 ? `scale(${navScale})` : undefined }}>
            <Link href="https://acmucsd.com/" className={`${s.navCap} ${s.navCapLeft}`}>
              <img src="/asset/nav_logo.svg" className={s.ship} alt="acm" />
            </Link>
            <div className={s.navMiddle}>
              <img src="/asset/navbar/nav_mid.svg" className={s.navMiddleBg} alt="" aria-hidden="true" />
              {pages.map((page, index) => (
                <Link
                  href={page.link}
                  className={s.navItem}
                  target={page.externalLink ? '_blank' : undefined}
                  key={index}
                >
                  {page.name}
                </Link>
              ))}
            </div>
            <Link
              href="https://acmurl.com/space-registration"
              target="_blank"
              className={`${s.navCap} ${s.navCapRight}`}
            >
              <span className={s.registerBtn}>Register Today!</span>
            </Link>
          </div>
        </nav>
      </>
    );
  } else { // mobile
    return (
      <>
        <div className={s.topVignette} aria-hidden="true" />
        <nav className={s.mobileNavWrapper}>
          <button type="button" className={s.mobileMenuButton} onClick={handleMobileOpen} aria-label="Open menu">
            <img src="/asset/menu_icon_mobile.svg" alt="" aria-hidden="true" />
          </button>
          <Link href="https://acmucsd.com/" className={s.mobileLogo}>
            <img src="/asset/nav_logo.svg" alt="acm" />
          </Link>
        </nav>
        <Dialog
          open={mobileOpen}
          onClose={handleMobileClose}
          PaperProps={{ className: s.mobileMenuPaper }}
          componentsProps={{ backdrop: { className: s.mobileMenuBackdrop } }}
        >
          <button
            type="button"
            className={s.mobileMenuClose}
            onClick={handleMobileClose}
            aria-label="Close menu"
          >
            <img src="/asset/X_icon_mobile.svg" alt="" aria-hidden="true" />
          </button>
          <div className={s.mobileMenuLinks}>
            {pages.map((page, index) => (
              <Link
                href={page.link}
                className={s.navItem}
                target={page.externalLink ? '_blank' : undefined}
                key={index}
                onClick={handleMobileClose}
              >
                {page.name}
              </Link>
            ))}
          </div>
        </Dialog>
      </>
    );
  }
};

export default Navbar;
