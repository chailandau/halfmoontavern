import { useEffect, useState } from 'react';

import { FocusTrap } from 'focus-trap-react';

const Menu = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  useEffect(() => {
    const mobileBreakpoint = window.matchMedia('(max-width: 1199px)');

    const html = document.querySelector('html');
    const menuLinks = document.querySelectorAll('header nav > ul > li > a');
    const menuButton = document.querySelector('header nav > ul > li > button');

    // close menu when you click something on mobile
    const closeMenu = () => {
      html?.classList.remove('nav-open');
      // need to toggle state as well
      setHamburgerOpen(!hamburgerOpen);
    };

    if (hamburgerOpen) {
      html?.classList.add('nav-open');
      // close mobile menu if click on link
      menuLinks?.forEach((menuLink) => {
        menuLink.addEventListener('click', closeMenu);
      });
      // add in for first button too (not an a tag)
      menuButton?.addEventListener('click', closeMenu);
    } else {
      html?.classList.remove('nav-open');
    }

    window.addEventListener('resize', () => {
      setTimeout(() => {
        // remove nav open and reset state on resize
        if (hamburgerOpen && !mobileBreakpoint.matches) {
          closeMenu();
        }
      }, 200);
    });
  }, [hamburgerOpen]);

  return (
    <>
      <FocusTrap active={hamburgerOpen}>
        <div>
          <button className="menu-toggle" onClick={toggleHamburger}>
            <span className="top line"></span>
            <span className="middle line"></span>
            <span className="bottom line"></span>
          </button>

          <nav>
            <ul>
              <li>
                <button>Whiskey</button>
              </li>
              <li>
                <a href={'#tequila'}>Tequila</a>
              </li>
              <li>
                <a href={'#vodka'}>Vodka</a>
              </li>
              <li>
                <a href={'#gin'}>Gin</a>
              </li>
              <li>
                <a href={'#rum'}>Rum</a>
              </li>
              <li>
                <a href={'#tiki'}>Tiki</a>
              </li>
              <li>
                <a href={'#other'}>Other</a>
              </li>
            </ul>
          </nav>
        </div>
      </FocusTrap>
    </>
  );
};

export default Menu;
