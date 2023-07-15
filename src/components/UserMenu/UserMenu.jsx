import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from 'redux/auth/authOperation';
import { selectorUser } from 'redux/auth/selector';

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
        <p>{user.name}</p>
        <button onClick={() => dispatch(authLogout())}>Logout</button>
      </div>
    </>
  );
};
