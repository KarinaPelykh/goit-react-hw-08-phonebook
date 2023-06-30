import PropTypes from "prop-types";
export const ContactList = ({ contacts = [], onDeleteContact }) => {
  return <>
    <ul>
      {
        contacts.map(item =>
          <li key={item.id}>{`${item.name}:${item.number}`}
            <button onClick={() => { onDeleteContact(item.id) }}>Delete</button>
              
          </li>
        )
      }
    </ul>
   
  </>
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














