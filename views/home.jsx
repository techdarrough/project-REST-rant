import React from 'react';
import Def from './default'


let home = () => (
      <Def>
        <main>
          <h1>REST-Rant</h1>
          <div>
              <div className='text-center'>
              <img src="images\anna-pelzer-IGfIGP5ONV0-unsplash.jpg" alt="" srcSet="" />
              </div>
              <div>
                  
                  <p className='text-center'>
                  Photo by <a href="https://unsplash.com/@annapelzer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anna Pelzer</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                  </p>
  
              </div>
          </div>
          <div className='text-center'>
          <a href="/places">
            <button className="btn-primary">Places Page</button>
          </a>
          </div>
        </main>
      </Def>
      );


module.exports = home