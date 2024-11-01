// src/components/CardList.jsx
import React from 'react';
import Card from './Card';

const CardList = ({ characters }) => {
    return (
        <div className="card-list">
            {characters.map((character) => (
                <Card key={character.id} character={character} />
            ))}
        </div>
    );
};

export default CardList;
