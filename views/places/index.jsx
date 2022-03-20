import React from 'react';
import Def from '../default';

let index = (data) => {
    let placesFormatted = data.places.map(place => (
        <div className='col-sm-6 col-md-4 col-lg-3' key={place.id}>
            <h2><a href={`/places/${place.id}`}>{place.name}</a></h2>
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