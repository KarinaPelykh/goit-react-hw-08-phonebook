import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { selectContacts } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [filter, setFilter] = useState('');

  const handleInputSearchName = e => {
    const { value } = e.target;
    setFilter(value);
    dispatch(addFilter(value));
  };
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <input
        filter={filteredContacts}
        type="text"
        name="name"
        value={filter}
        onChange={handleInputSearchName}
      />
    </>
  );
};
Filter.propTypes = {
  onInputSearchName: PropTypes.func,
  value: PropTypes.string,
};
