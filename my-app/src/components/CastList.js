import React from 'react';

const CastList = ({cast})=>(
   <ul>
       {cast.map(char=>(
       <li key={char.id}>
           <img src={char.profile_path} alt={char.name}/>
           <p>{char.name}</p>
           <p>Chatacter: {char.character}</p>
        </li>))}
    </ul>
);

export default CastList;