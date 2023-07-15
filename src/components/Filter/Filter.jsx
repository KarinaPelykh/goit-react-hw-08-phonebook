import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInputSearchName = e => {
    const { value } = e.target;
    dispatch(addFilter(value));
  };

  return (
    <>
      <h2>Contacts</h2>
      <p
        style={{
          color: 'white',
        }}
      >
        Find contactsby name
      </p>
      <input type="text" name="name" onChange={handleInputSearchName} />
    </>
  );
};
