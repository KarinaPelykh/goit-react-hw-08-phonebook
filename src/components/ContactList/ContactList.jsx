import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { feathauthRegisters } from 'redux/auth/authOperation';
import { deleteContactThunk, fetchContactsThunk } from 'redux/operations';
import { selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilter);

  useEffect(() => {
    dispatch(feathauthRegisters());
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <ul>
        {filteredContacts.map(item => (
          <li key={item.id}>
            {`${item.name}:${item.phone}`}
            <button onClick={() => dispatch(deleteContactThunk(item.id))}>
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
