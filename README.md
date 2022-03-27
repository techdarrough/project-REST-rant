# project|REST|rant
## UNLV practice project using node express
### By Preston Darrough
#### Photo by <a href="https://unsplash.com/@iavnt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ivan Torres</a> on <a href="https://unsplash.com/s/photos/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
| Method |	Path |	Purpose |
|----------|--------------|--------|
| GET |	/ |	Home page |
| GET |	/places |	Places index page |
| POST |	/places |	Create new place |
| GET |	/places/new |	Form page for creating a new place |
| GET |	/places/:id |	Details about a particular place |
| PUT |	/places/:id |	Update a particular place |
| GET |	/places/:id/edit |	Form page for editing an existing place |
| DELETE |	/places/:id |	Delete a particular place |
| POST |	/places/:id/rant  |	Create a rant (comment) about a particular place |
| DELETE |	/places/:id/rant/:rantId |	Delete a rant (comment) about a particular place |
| GET |	* |	404 | page (matches any route not defined above) |


|NPM packages used|Version|
|-----------------|--------|
|bootstrap-star-rating | 4.1.2 |
|dotenv | 16.0.0 |
| express-react-views | 0.11.0|
| express | 4.17.3 |
| method-override | 3.0.0 |
| react | 17.0.2 |
| urlencode | 1.1.0 |


![image](https://media.giphy.com/media/V48T5oWs3agg0/giphy.gif)


