import React from 'react';
import Def from './default'

let error404 = () => (
        <Def>
        <main>
            <h1>404 : Page does not exist </h1>
            <p>Sorry no content found</p>
            <img src="images\karina-vorozheeva-rW-I87aPY5Y-unsplash.jpg" alt="Kitty and a butterfly" />
            <p>
                Photo by <a href="https://unsplash.com/@_k_arinn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Karina Vorozheeva</a> on <a href="https://unsplash.com/s/photos/free-404-cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </p>
        </main>
    </Def>
    )

module.exports = error404

