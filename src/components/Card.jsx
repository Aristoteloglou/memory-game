import image from "../assets/react.svg"

function Card({game}){
    
    
    function handleIncreasePoints(e){
        game.increasePoints();
    }


    return (
        <div onClick={handleIncreasePoints} className="card">
            <img className="card-image" src={image} />
            <p>Ligma Figma</p>
        </div>
    )




}

export default Card;