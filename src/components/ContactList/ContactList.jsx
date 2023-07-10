import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
// import { deleteContact } from 'redux/contactSlice';
import { deleteContactThunk } from 'redux/operations';
import { selectContacts, selectorFilter } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectorFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const handelDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <>
      <ul>
        {filteredContacts.map(item => (
          <li key={item.id}>
            {`${item.name}:${item.phone}`}
            <button onClick={() => handelDeleteContact(item.id)}>Delete</button>
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
