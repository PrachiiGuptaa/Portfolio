import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import styles from './Navbar.module.css';
import { FaBars } from 'react-icons/fa';
import { FcTimeline } from 'react-icons/fc';
import { AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const [isShow, setIsShow] = useState(true);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleHomeClick = () => {
    if (isHome) {
      scroll.scrollToTop({ duration: 10, smooth: 'easeInOutQuad' });
    } else {
      setIsShow(true); // Close the menu bar on About or More Projects link click
      scroll.scrollTo('home', { duration: 10, smooth: 'easeInOutQuad', offset: -50 });
    }
    setIsShow(true); // Close the menu bar on About link click
  };

  return (
    <nav>
      <Link to="/" className={styles.logoLink} onClick={handleHomeClick}>
        <p>
          <FcTimeline className={styles.logo} /> Prachi Gupta
        </p>
      </Link>
      <div className={styles.menu}>
        {isShow ? (
          <FaBars onClick={() => setIsShow(false)} />
        ) : (
          <AiOutlineClose onClick={() => setIsShow(true)} />
        )}
      </div>
      <ul className={styles.navbar} id={isShow ? '' : styles.menu}>
        {isHome && (
          <>
            <li>
              <Link to="/" onClick={handleHomeClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleHomeClick}>
                About
              </Link>
            </li>
            <li>
              <a href="#skills" onClick={() => setIsShow(true)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#project" onClick={() => setIsShow(true)}>
                Projects
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/drive/folders/1IzwbshHt3IQqZJT7CkfVH9zgsOb-yRlg?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsShow(true)}
              >
                Resume
              </a>
            </li>
          </>
        )}
        {!isHome && (
          <li>
            <Link to="/" onClick={handleHomeClick}>
              Home
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
