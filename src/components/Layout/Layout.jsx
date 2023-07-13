import { Navigation } from 'components/Navigation/Navigation';
import styles from './Layout.module.css';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Navigation />
        </nav>
      </header>
      <Outlet />
    </>
  );
};
