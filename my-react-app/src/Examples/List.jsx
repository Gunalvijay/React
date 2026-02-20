function List(){
    const fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

    const listitems = fruits.map(fruit => <li>{fruit}</li>)

    return(listitems);
}

export default List