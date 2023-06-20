import { useEffect, useState } from 'react';
import s from './style.module.scss';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Container,
  Box,
  MenuItem,
  IconButton,
  Dialog,
  Toolbar,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import Link from 'next/link';

const pages = [
  {
    name: 'About',
    link: '/#about',
  },
  {
    name: 'FAQ',
    link: '/#faq',
  },
  {
    name: 'Companies',
    link: '/#companies',
  },
  {
    name: 'Registration',
    link: 'https://acmurl.com/space-registration',
    externalLink: true,
  },
];

const Navbar: React.FC = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFFFFF',
      },
      secondary: {
        main: '#110f47',
      },
    },
  });

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

  if (width > 768) {
    return (
      <nav>
        <ThemeProvider theme={theme}>
          <AppBar color="secondary" sx={{ boxShadow: 'none' }}>
            <Container maxWidth="xl">
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Link href="/">
                  <img src="asset/nav_spaceship.svg" className={s.ship} />
                </Link>
                <Box sx={{ display: 'flex', flexDirection: 'row', paddingRight: '8px' }}>
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
                </Box>
              </Box>
            </Container>
          </AppBar>
        </ThemeProvider>
      </nav>
    );
  } else {
    return (
      <nav>
        <ThemeProvider theme={theme}>
          <AppBar color="secondary" sx={{ boxShadow: 'none' }}>
            <Container maxWidth="xl">
              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Link href="/">
                  <img src="asset/nav_spaceship.svg" className={s.ship} />
                </Link>
                <IconButton
                  size="large"
                  edge="start"
                  color="primary"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                  onClick={handleMobileOpen}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Container>
          </AppBar>
          <Dialog
            fullScreen
            open={mobileOpen}
            onClose={handleMobileClose}
            PaperProps={{
              style: {
                backgroundColor: '#110F47',
              },
            }}
          >
            <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Link href="/" onClick={handleMobileClose}>
                <img src="asset/nav_spaceship.svg" className={s.ship} />
              </Link>
              <IconButton edge="start" color="primary" onClick={handleMobileClose} aria-label="close">
                <CloseIcon />
              </IconButton>
            </Toolbar>
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
          </Dialog>
        </ThemeProvider>
      </nav>
    );
  }
};

export default Navbar;
