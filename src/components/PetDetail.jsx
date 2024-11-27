const PetDetail = (props) => {
if(!props.selected)
    return (
<div>
    <h1>NO DETAILS</h1>
</div>)
    return (

<div> 
<p>Name: {props.selected.name}  </p>
<p>Breed: {props.selected.breed} </p>
<p>Age: {props.selected.age} year {props.selected.age > 1 ? 's' : ''} old </p>
</div>
)
}

export default PetDetail 