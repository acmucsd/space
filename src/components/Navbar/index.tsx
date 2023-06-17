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
import { useRouter } from 'next/router';

const pages = ['About', 'FAQ', 'Companies', 'Registration'];

const Navbar: React.FC = () => {
  const router = useRouter();

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

  const handleMobileRedirect = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setMobileOpen(false);
    handleDesktopRedirect(e);
  };

  const handleDesktopRedirect = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const input = e.target as HTMLElement;
    if (input.innerText === 'About') {
      router.push('/#about');
    } else if (input.innerText === 'FAQ') {
      router.push('/#faq');
    } else if (input.innerText === 'Companies') {
      router.push('/#companies');
    } else if (input.innerText === 'Registration') {
      window.open('https://acmurl.com/space-registration', '_blank', 'noopener,noreferrer');
    }
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
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                  {pages.map((page, index) => {
                    return (
                      <MenuItem
                        sx={{
                          color: 'white',
                          marginRight: index == pages.length - 1 ? 3 : 2,
                        }}
                        onClick={handleDesktopRedirect}
                        key={index}
                        className={s.sections}
                      >
                        {page}
                      </MenuItem>
                    );
                  })}
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
                <img src="asset/nav_spaceship.svg" className={s.ship} />
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
              <img src="asset/nav_spaceship.svg" className={s.shipDialog} />
              <IconButton edge="start" color="primary" onClick={handleMobileClose} aria-label="close">
                <CloseIcon />
              </IconButton>
            </Toolbar>
            {pages.map((page, index) => (
              <MenuItem onClick={handleMobileRedirect} sx={{ color: 'white', ml: 'auto', mr: 'auto' }} key={index}>
                {page}
              </MenuItem>
            ))}
          </Dialog>
        </ThemeProvider>
      </nav>
    );
  }
};

export default Navbar;
