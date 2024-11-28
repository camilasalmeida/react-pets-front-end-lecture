// PetDetail.jsx

const PetDetail = (props) => {
if(!props.selected)
    return (
<div className="details-container">
    <h1>NO DETAILS</h1>
</div>)

    return (
<> 
<div className="details-container">
<p>Name: {props.selected.name}  </p>
<p>Breed: {props.selected.breed} </p>
<p>Age: {props.selected.age} year {props.selected.age > 1 ? 's' : ''} old </p>

<div className="button-container"> 
<button onClick={() => props.handleFormView(props.selected)}>Edit</button>
<button onClick={() => props.handleRemovePet(props.selected._id)}>Delete</button>
</div>
</div>
</>
)
}

export default PetDetail 