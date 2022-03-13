import React from 'react';

let Def = (html) => (
  <html>
    <head>
      <title>REST-Rant</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"
      ></link>
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div  class="collapse navbar-collapse">
            <ul class="navbar-nav">
          <li class="nav-item active">
            <a href="/">Home</a>
          </li>
          <li class="nav-item">
            <a href="/places">Places</a>
          </li>
          <li class="nav-item">
            <a href="/places/new">Add New Place</a>
          </li>
        </ul>
        </div>
      </nav>
      
      {html.children}
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossOrigin="anonymous"
      ></script>
    </body>
  </html>
);


module.exports = Def