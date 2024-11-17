// src/components/PetList.jsx

const PetList = (props) => {
    const pets = props.petList.map((pet) => <li key={pet._id}>{pet.name}</li>);
  
    return <h1>Pet List</h1>;
  };

export default PetList
