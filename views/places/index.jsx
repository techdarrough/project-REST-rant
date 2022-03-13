import React from 'react';
import Def from '../default';

let index = (data) => {
    let placesFormatted = data.places.map((place, idx) => (
        <div className='col-sm-6' key={idx}>
            <h2>{place.name}</h2>
            <p className='tex-center'>
                {place.cuisines}
            </p>
            <img src={place.pic} alt={place.name} />
            <p className='text-center'>
                Located in {place.city}, {place.state}
            </p>
        </div>
        )
    )
    return (
       <Def>
           <main>
               <h1>Hip Joints to frequent</h1>
               <div className='row'>
               {placesFormatted}
               </div>
           </main>
       </Def>
    )
}
module.exports = index