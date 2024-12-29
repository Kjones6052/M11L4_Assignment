// Browse Character Page code

// Import as needed
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Function Based Component: 'BrowseCharacters'
const BrowseCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();
    const McApiHash = "a783b08900da50084275249ef1c72bc7";
    const McApiPubKey = "ba1de457fe1a5da3855d1b2f84fb0024";

    // useEffect(): fetch data from api
    useEffect(() => {
        const fetchCharacterData = async () => {
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${McApiPubKey}&hash=${McApiHash}`);
                setCharacters(response.data.data.results); 
            } catch (error) {
                console.error('Error fetching characters list:', error);
                setError(error);
            }
        };
        fetchCharacterData();
    }, []);

    return (
        <div>
          <div className="grid-container">
            {characters.map((character) => (
              <div key={character.id} className="character-card" >
                <img 
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                    alt={character.name} 
                    width={250}
                    height={250}
                    onClick={() => navigate(`/view-details/${character.id}`)}
                />
                <h3>{character.name}</h3>
              </div>
            ))}
          </div>
        </div>
      );

};

export default BrowseCharacters;