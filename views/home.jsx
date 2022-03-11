import React from 'react';
import Def from './default'


let home = () => {
    return (
      <Def>
        <main>
          <h1>HOME</h1>
          <div>
              
              <div>
                  <img src="\images\ivan-torres-MQUqbmszGGM-unsplash.jpg" alt="" srcSet="Pizza" />
              Photo by <a href="https://unsplash.com/@iavnt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ivan Torres</a> on <a href="https://unsplash.com/s/photos/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </div>
          </div>
          <a href="/places">
            <button className="btn-primary">Places Page</button>
          </a>
        </main>
      </Def>
    );
}

module.exports = home