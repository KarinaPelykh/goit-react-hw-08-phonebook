import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from 'redux/auth/authOperation';
import { selectorUser } from 'redux/auth/selector';
import styles from './UserMenu.module.css';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectorUser);
  // console.log(user);
  // email: 'dsdsdsdsd@gmail.com';
  // name: 'dsdsdsdsd';
  return (
    <>
      <div style={{ display: 'flex' }}>
        <p style={{ color: 'wthite' }}></p>
        <p className={styles.name}>{user.name}</p>
        <button className={styles.btn} onClick={() => dispatch(authLogout())}>
          Logout
        </button>
      </div>
    </>
  );
};
