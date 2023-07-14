import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selctorlogged } from 'redux/auth/selector';
import { AuthNav } from 'components/AuthNav/AuthNav';
export const Navigation = () => {
  const isLoggedIn = useSelector(selctorlogged);
  console.log(isLoggedIn);
  return (
    <>
      <ul
        style={{ display: 'flex', listStyle: 'none', marginRight: '30px' }}
        className={styles.list}
      >
        <li style={{ marginRight: '30px' }} className={styles.item}>
          {/* {isLoggedIn && <Link to="/">Home</Link>} */}
          <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
          {/* {isLoggedIn && <Link to="/contacts">Contact</Link>} */}
          <Link to="/contacts">Contact</Link>
        </li>
      </ul>
      <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
    </>
  );
};
