import React from "react";
import Def from "../default";

function show(data) {
  let comments = (
    <h3 className="inactive">No Comments Here</h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(comment => 
       (
        <div className="border" key={comment.id}>
          <h2 className="rant">{comment.rant ? 'Rant! 👎' : 'Rave! 👍'}</h2>
          <h4>{comment.content}</h4>
          <h3>
            <stong>- {comment.author}</stong>
          </h3>
          <h4>Rating: {comment.stars}</h4>
        </div>
      )
    )
  }
  return (
    <Def>
      <main>
        <div className="row" key={data.place.id}>
          <h1>{data.place.name}</h1>

          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">

            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
          </div>
          <div className="row">
            <hr />
            <h2>Comments</h2>
            {comments}
          </div>
          <form method='POST' action={`/places/${data.place.id}/comment`}>
            <div className="form-">
              <label htmlFor="author">Author</label>
              <input className="form-control" id="author" name="author" />
            </div>

            <div className="form-group">
              <label htmlFor="content">Content</label>
              <input
                className="form-control"
                id="content"
                name="content"
                type="textarea"
              />
            </div>

            <div className="form-group">
              <label htmlFor="stars">Star Rating</label>
              <input
                className="form-control rating rating-loading"
                data-show-caption="false"
                data-show-clear="false"
                id="stars"
                name="stars"
                type="range"
                step="0.5"
                min="0"
                max="5"
                
              />
             
              
            </div>

            <div className="form-group">
              <label htmlFor="rant">Rant</label>
              <input id="rant" name="rant" type="checkbox" defaultChecked />
            </div>

            <input
              className="btn btn-primary"
              type="submit"
              value="Add Comment"
            />
          </form>


        </div>
      </main>
    </Def>
  );
}

module.exports = show;
