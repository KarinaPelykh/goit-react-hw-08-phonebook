import styles from './ContactForm.module.css'
import { Component } from "react";
export class ContactForm extends Component {
    
    state = {
        name: '',
        number:''
    }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    };
    
    handelSubmit = e => {
        e.preventDefault()
        const { name, number } = this.state
        this.props.onAddContact(name, number);
      
        this.setState({ name: '', number:''})
    }
    render() {
    const { name, number } = this.state
        return <>
      
            
        <h1>Phonebook</h1>
<form  className={styles.form} onSubmit ={this.handelSubmit}>
         <p className={styles.text}>Name</p>
      <input
      type="text"
      name="name"
      pattern="^[A-Za-zА-Яа-яЁё]+\s?[A-Za-zА-Яа-яЁё]+$"
      title="Name may contain only letters and a single space in between. For example Rosie Simpson"
      required
     value={name}
            
                    onChange={this.handleInputChange}
                  
            />
     <p className={styles.text}>Nomber</p>
      <input
      type="tel"
      name="number"
      pattern="^\d{3}(-?\d{2}){1,2}$"
      title="Phone number must be in the format 123-45-7 or 123457"
                required
                value={number}
                onChange={this.handleInputChange}
                
      />
      <button className={styles.btn}>Add contact</button>
      </form>
    </>}
   
}

