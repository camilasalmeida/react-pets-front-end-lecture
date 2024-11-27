import { useState } from 'react';

const PetForm = (props) => {
const [formData, setFormData] = useState({                                       // formData state to control the form
    name: '',
    age: '',
    breed: '',
})                  

const handleChange = (evt) => {                                                  // handleChange function to update formData state 
    setFormData({ ...formData, [evt.target.name] : evt.target.value });          // This is the key part that dynamically updates the value for the form field that the user has interacted with.
}                                                                                // evt.target.value refers to the current value that the user has typed into the input field.

return (
    <div> 
        <form> 
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
            <button type="submit">Add New Pet</button>
        </form>
    </div>
)
}

export default PetForm;