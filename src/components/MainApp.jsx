import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardList from './CardList';

const MainApp = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://rickandmortyapi.com/api/character', {
                params: { page },
            });
            setCharacters(response.data.results);
            setTotalPage(response.data.info.pages);
        };
        fetchData();
    }, [page]);

    const handleNextPage = () => {
        if (page < totalPage) setPage(page + 1);
    };

    const handlePrevPage = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleLimitChange = (e) => {
        setLimit(Number(e.target.value));
        setPage(1); // Возвращаемся на первую страницу при изменении лимита
    };

    return (
        <div className="app">
            <h1>Rick and Morty Characters</h1>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={page === 1}> Back</button>
                <span>{page} из {totalPage}</span>
                <button onClick={handleNextPage} disabled={page === totalPage}> Next</button>
            </div>
            <select onChange={handleLimitChange} value={limit}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
            </select>
            <CardList characters={characters.slice(0, limit)} />
        </div>
    );
};

export default MainApp;
