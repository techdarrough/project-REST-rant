import React from 'react';
import Def from './default'


let home = () => {
    return (
      <Def>
        <main>
          <h1>HOME</h1>
          <a href="/places">
            <button className="btn-primary">Places Page</button>
          </a>
        </main>
      </Def>
    );
}

module.exports = home