import PropTypes from "prop-types";
export const Filter = ({onInputSearchName, value}) => {
   
    const handelSubmit = e => {
     e.prevenDefault()
    onInputSearchName('')
    };

    return <>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input
        onSubmit={handelSubmit}
        type="text"
        name="name"
        value={value}
        onChange={(e) => {onInputSearchName(e.target.value)}}
        />

    </>
}
Filter.propTypes = {
     onInputSearchName:PropTypes.func,
     value: PropTypes.string
};