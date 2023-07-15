import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selctorlogged } from 'redux/auth/selector';
import { AuthNav } from 'components/AuthNav/AuthNav';
export const Navigation = () => {
  const isLoggedIn = useSelector(selctorlogged);

  return (
    <>
      <ul
        style={{ display: 'flex', listStyle: 'none', marginRight: 'auto' }}
        className={styles.list}
      >
        <li
          style={{ marginRight: '30px', listStyle: 'none' }}
          className={styles.item}
        >
          <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
          {isLoggedIn && <Link to="/contacts">Contact</Link>}
          {/* <Link to="/contacts">Contact</Link> */}
        </li>
      </ul>
      <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </>
  );
};
