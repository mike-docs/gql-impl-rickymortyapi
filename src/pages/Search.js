import { useLazyQuery } from "@apollo/client";
import {useQuery, gql} from "@apollo/client";
import React, {useState} from "react";


const GET_CHARACTER_LOCATIONS = gql`
query GetCharacterLocations($name: String!){
    characters(filter: {name: $name}) {
    results {
      location {
        name
      }
    }
  }
}
`;

export default function Search(){
    const [name,setName] = useState("");

    const [getLocation, {loading, error, data, called}] = useLazyQuery(
        GET_CHARACTER_LOCATIONS, {
            variables:{
                name,
            }
        }
    )

    console.log(data);

    return (
        <div>
            <input value={name} onChange={
                (e) => setName(e.target.value)
            }></input>
            <button onClick={()=> getLocation()}>Search</button>
            {loading && <div>spinner...</div>}
            {error && <div>something went wrong...</div>}
            {data && (
                <ul>
                    {data.characters.results.map((character) => {
                        return <li>{character.location.name}</li>;
                    })}
                </ul>
            )}

        </div>
    )
    
}