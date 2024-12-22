import { useEffect, useState } from 'react';

import Logo from '~/components/Header/Logo';
import Menu from '~/components/Header/Menu';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      const isMobile = window.matchMedia('(max-width: 991px)').matches;
      setScrolled(window.scrollY > (isMobile ? 225 : 300));
    };

    window.addEventListener('scroll', checkScroll, { passive: true });

    // Initial check
    checkScroll();

    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  useEffect(() => {
    if (scrolled) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
  }, [scrolled]);

  return (
    <header>
      <div className="big-wrapper">
        <div className="logo">
          <button>
            <Logo />
          </button>
        </div>
        <Menu />
      </div>
    </header>
  );
};

export default Header;
