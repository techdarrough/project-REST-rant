import React from 'react';
import Def from './default'

let error404 = () => {
    return (
        <Def>
        <main>
            <h1>404 : Page does not exist </h1>
            <p>Sorry no content found</p>
        </main>
    </Def>
    )

}

module.exports = error404

