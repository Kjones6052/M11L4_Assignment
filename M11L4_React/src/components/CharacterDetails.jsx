// Character Details code

// Import as needed
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Functional component to display character details according to ID
const CharacterDetails = () => {
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [thumbnailPath, setThumbnailPath] = useState();
    const [thumbnailExt, setThumbnailExt] = useState();
    const { id } = useParams();
    const McApiHash = "a783b08900da50084275249ef1c72bc7";
    const McApiPubKey = "ba1de457fe1a5da3855d1b2f84fb0024";

    // useEffect(): fetch data from api
    useEffect(() => {
        if (id) {
            const fetchCharacterData = async () => {
                try {
                    const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${McApiPubKey}&hash=${McApiHash}`);
                    if (!response) {
                        throw new Error(`HTTP error! status: ${response.status}`)
                    }
                    setName(response.data.data.results[0].name);
                    setDescription(response.data.data.results[0].description);
                    setThumbnailPath(response.data.data.results[0].thumbnail.path);
                    setThumbnailExt(response.data.data.results[0].thumbnail.extension);
                } catch (error) {
                    console.error('Error fetching characters list:', error);
                }
            }
            fetchCharacterData();
        };
    }, [id]);

    return (
        <div className="character-detail">
            <img src={`${thumbnailPath}.${thumbnailExt}`} alt={name} />
            <h3>{name}</h3>
            <p><strong>Description:</strong> {description}</p>
        </div>
    );
};

export default CharacterDetails;