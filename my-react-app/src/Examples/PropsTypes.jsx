function Student(props){
    return(
        <div className="profile">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student : {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

Student.PropTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool
}

Student.defaultTypes = {
    name : "Guest",
    age : 0,
    isStudent : "No"
}
export default Student