import Profilepic from '../assets/person.jpg';

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={Profilepic} alt="User"></img>
            <h2>Robert Louis</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur magni nisi quisquam porro, quae praesentium id, doloremque soluta deleniti quod voluptatum nulla rerum facere sunt reprehenderit labore corporis! Animi, quas!</p>
        </div>
    )
}

export default Card