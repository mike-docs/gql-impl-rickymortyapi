import React from 'react';
import { useCharacters } from '../hooks/useCharacters';
import './CharactersList.css';
import {Link} from 'react-router-dom';



export default function CharactersList(){
    const {error, loading, data} = useCharacters();

    console.log(data);

    if (loading){
        return <div>spinner...</div>
    }

    if (error){
        return <div>Something went wrong...</div>
    }

    return (
        <div className="CharactersList">
            {data.character.results.map(character => {
                return (
                <Link to={`/${character.id}`}>
                    <img src={character.image} />
                    <h2>{character.name}</h2>
                </Link>
                )
            })}
        </div>
    );
}