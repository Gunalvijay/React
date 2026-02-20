function Conditional(props){
    if(props.isLoggedIn){
        return <h2>Welcome {props.user}</h2>
    }
    return <h2>Please log in  to continue</h2>
}

export default Conditional