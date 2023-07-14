import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from 'redux/auth/authOperation';
import { selctorUser } from 'redux/auth/selector';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selctorUser);
  console.log(user);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <p>Welcome {user.name}</p>
        <p>{user.email}</p>
        <button onClick={() => dispatch(authLogout())}>Logout</button>
      </div>
    </>
  );
};
