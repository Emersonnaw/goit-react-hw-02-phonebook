import React,{ Component } from 'react';
import { nanoid } from 'nanoid'
const INITIAL_STATE = {
  contacts: [],
  name: '',
  number:'',
};

class FormAddContacts extends Component {
  state = {
    ...INITIAL_STATE,
  };

  handleSubmit = e => {
    e.preventDefault();
   
    this.setState((prevState) => {
      const value = this.state.name;
      const contactData = Object.keys(this.state);
    

      const findContacts = contactData.filter(contact => contact !== "contacts")
      console.log("filterd", findContacts);




      return {
        contacts: [...prevState.contacts, {name:value, id:nanoid()}],
      }
    });
   
    
  };

  handleChange = e => {
    const { name,value } = e.target;
    this.setState({ [name]: value });
 
  }

  render() {
    const { name,number, contacts} = this.state;
    return (
      <div >
        <h1 >Phonebook</h1>
        <form  onSubmit={this.handleSubmit}>
          <label>
            <p >Name</p>
            <input
              onChange={this.handleChange}
              
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            
            <label>
              <p>Numbers</p>
              <input
                onChange={this.handleChange}
                value={number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <button type="submit">Add contact</button>
          </label>
        </form>
        <h2>Contacts</h2>
        <ul>
        {contacts.map(({ id, name, }) =>
          <li key ={id}>
            <p>{name}</p>
        </li>
        )}
        </ul>
      </div>
    );
  }
}

export default FormAddContacts;
