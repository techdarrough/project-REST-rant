import React from 'react';
import Def from '../default';

let index = (data) => {
    let placesFormatted = data.places.map(place => (
        <div>
            <h2>{place.name}</h2>
            <img src={place.pic} alt={place.name} />
        </div>
        )
    )
    return (
       <Def>
           <main>
               <h1>PLACES INDEX</h1>
               {placesFormatted}
           </main>
       </Def>
    )
}
module.exports = index