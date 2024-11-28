// src/components/PetList.jsx

const PetList = (props) => {
  const pets = props.petList.foundPetsList?.map((pet) => {
    return ( 
    <a key={pet._id} onClick={() => props.updateSelected(pet)}>
        <li>{pet.name}</li>
        </a>
    )
  })

  //console.log(pets)

  return (
    <div className="sidebar-container">
      <h1>Pet List</h1>
      <div className="list-container"> 
      {!props.petList.foundPetsList || props.petList.foundPetsList.length === 0 ? <h2>No Pets Yet!</h2> : <ul>{pets} </ul>}
      </div>
    <button onClick={props.handleFormView}>
        {props.isFormOpen ? 'Close Form' : 'New Pet'}
    </button>
    
    </div>
  )
}

export default PetList;
