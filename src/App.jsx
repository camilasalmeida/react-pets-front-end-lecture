// src/App.jsx
import { useState, useEffect } from 'react'
import * as petService from './services/petService'
import PetList from './components/PetList.jsx';

const App = () => {
  const [petList, setPetList] = useState([])

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


//------------------------------------------------------------------------------------\\
return (
<> 
<h1>Hello World! </h1>
<PetList petList={petList} />

</>

)
}


export default App;

//<PetList petList={petList} />;