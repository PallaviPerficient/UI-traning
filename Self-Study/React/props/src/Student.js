function Student (props){
    console.log(props);
    return(
        <>
        <h3>Hello {props.name}</h3>
        <h3>{props.email}</h3>
        <h3>{props.other.address}</h3>
        <h3>{props.other.number}</h3>

        </>
    )
}
export default Student;