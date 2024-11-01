import React from 'react';



const Card = ({character}) => {
    return (
        <div className="card">
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>{character.status}</p>
            <p>{character.gender} - {character.species}</p>

        </div>
    );
};

export default Card;