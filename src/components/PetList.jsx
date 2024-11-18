// src/components/PetList.jsx

const PetList = (props) => {
    const pets = props.petList.foundPetsList?.map((pet) => {
return (
    <li key={pet._id}>{pet.name}</li>
)
    });

  console.log(pets);


    return (
        <div>
          <h1>Pet List</h1>
         <ul>{pets} </ul> 
        </div>
      )
    }

export default PetList;





