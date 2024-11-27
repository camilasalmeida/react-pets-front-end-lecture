// src/App.jsx
import { useState, useEffect } from 'react'
import * as petService from './services/petService'
import PetList from './components/PetList.jsx';
import PetDetail from './components/PetDetail.jsx';

const App = () => {
  const [petList, setPetList] = useState([])
  const [selected, setSelected] = useState(null)


useEffect(() => {                                          // Create a new useEffect.                               
    const fetchPets = async () => {                        // Create a new async function.
      try {    
        const pets = await petService.index()              // Call on the index function.
        console.log(pets)
        if (pets.error) {
      throw new Error(pets.error)
    }
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

//------------------------------------------------------------------------------------\\
return (
<> 
<PetList petList={petList} updateSelected={updateSelected} />
<PetDetail selected={selected} />
</>
)
}

export default App;
