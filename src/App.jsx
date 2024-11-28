// src/App.jsx
import { useState, useEffect } from 'react'
import * as petService from './services/petService'
import PetList from './components/PetList.jsx';
import PetDetail from './components/PetDetail.jsx';
import PetForm from './components/PetForm.jsx';

const App = () => {
  const [petList, setPetList] = useState([])
  const [selected, setSelected] = useState(null)
  const [isFormOpen, setIsFormOpen] = useState(false)        // The default for it is closed. The form is closed.

useEffect(() => {                                          // Create a new useEffect.                               
    const fetchPets = async () => {                        // Create a new async function.
      try {    
        const pets = await petService.index()              // Call on the index function.
        console.log(pets)
        if (pets.error) {
      throw new Error(pets.error)
    }
    // Ensure pets is an array
    //setPetList(Array.isArray(pets) ? pets : []);

    setPetList(pets)                                       // Set petList state to the returned pets data.
     } catch (error) {
      console.log(error)
     }
    }
fetchPets()                                                // Invoke the function
    }, [])                                                 // Add an empty dependency array to the `useEffect` hook.

const updateSelected = (pet) => {                           // (pet)comes from the PetList component, specifically from the OnClick event handler attached to each pet in the list.
setSelected(pet)
}

const handleFormView = (pet) => {
if (!pet.name) setSelected(null)
  setIsFormOpen(!isFormOpen)                                // This is commonly done to show or hide something on the page, in this case, to control the visibility of a form.
}

const handleAddPet = async (FormData) => {
  try {
    const newPet = await petService.create(FormData);

    if (newPet.error) {
      throw new Error(newPet.error);
    }
    setPetList([newPet, ...petList]);
    setIsFormOpen(false);

  } catch(error) { 
  console.log(error);
  }
}

const handleUpdatePet = async (formData, petId) => {
  try {
    const updatedPet = await petService.updatePet(formData, petId)
    if(updatedPet.error) {
      throw new Error(updatedPet.error)
    }
    const updatePetList = petList.map((pet) => 
      pet._id !== updatedPet._id ? pet : updatedPet 
    )
    setPetList(updatePetList)
    setSelected(updatedPet)
    isFormOpen(false)
  } catch(error) {
    console.log(error)
  }
}

//------------------------------------------------------------------------------------\\
return (
<> 
<PetList petList={petList} 
updateSelected={updateSelected} 
handleFormView={handleFormView}
isFormOpen={isFormOpen} 
/>

{isFormOpen ? (
  <PetForm handleAddPet={handleAddPet} selected={selected} handleUpdatePet={handleUpdatePet} />
) : ( 
<PetDetail selected={selected} handleFormView={handleFormView} />
)}
</>
)
}

export default App;
