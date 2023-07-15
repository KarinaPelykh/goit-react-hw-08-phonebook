import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk, fetchContactsThunk } from 'redux/operations';
import { selectFilter } from 'redux/selectors';
import styles from './ContactList.module.css';
export const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <ul className={styles.listContact}>
        {filteredContacts.map(item => (
          <li className={styles.itemContact} key={item.id}>
            <img
              className={styles.userContact}
              src="https://www.svgrepo.com/show/382693/user-account-person-avatar.svg"
              alt="user"
            />
            {`${item.name}:${item.number}`}
            <button
              className={styles.btnContact}
              onClick={() => dispatch(deleteContactThunk(item.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};
