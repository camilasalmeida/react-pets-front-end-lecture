import { useState } from 'react';

const PetForm = (props) => {
const initialState = {                                       // formData state to control the form
    name: '',
    age: '',
    breed: '',
}
const [formData, setFormData] = useState(props.selected ? props.selected : initialState)                

const handleChange = (evt) => {                                                  // handleChange function to update formData state 
    setFormData({ ...formData, [evt.target.name] : evt.target.value });          // This is the key part that dynamically updates the value for the form field that the user has interacted with.
}                                                                                // evt.target.value refers to the current value that the user has typed into the input field.

const handleSubmitForm = (evt) => {
    evt.preventDefault();
    if(props.selected) { 
        props.handleUpdatePet(formData, props.selected._id)
    } else {
    //console.log('Form Data Submitted:', formData); // Log the data submitted
    props.handleAddPet(formData);
    //setFormData({ name: '', age: '', breed: '' });
}};

return (
    <div> 
        <form onSubmit={handleSubmitForm}> 
            <label htmlFor="name"> Name </label>
            <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            />
            <label htmlFor="age"> Age </label>
            <input
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            />
            <label htmlFor="breed"> Breed </label>
            <input 
            id="breed"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            />
            <button type="submit"> {props.selected ? 'Update Pet' : 'Add New Pet'} </button>
        </form>
    </div>
)
}

export default PetForm;