import React from "react";
import Def from "../default";

function show(data) {
  let comments = <h3 className="inactive">No Comments Here</h3>;
  let rating = (
    <h3 className="inactive">Be the first to rate this location!</h3>
  );

  //Comments logic
  if (data.place.comments.length) {
    comments = data.place.comments.map((comment) => (
      <div className="border col" key={comment.id}>
        <h2 className="rant">{comment.rant ? "Rant! 👎" : "Rave! 👍"}</h2>
        <h4>{comment.content}</h4>
        <h3>
          <stong>- {comment.author}</stong>
        </h3>
        <h4>Rating: {comment.stars}</h4>
      </div>
    ));
  }

  // ratings Aggerate
  if (data.place.comments.length) {
    let sum = data.place.comments.reduce((total, c) => total + c.stars, 0);
    let averageRating = sum / data.place.comments.length;
    rating = (
      <input
        className="rating"
        data-show-caption="true"
        data-show-clear="false"
        data-readonly="true"
        type="range"
        id="input-3"
        name="input-3"
        value={Math.round(averageRating)}
        // I used an NPM package calleed  bootstrap-star-rating to make some great looking stars
      />
    );
  }

  return (
    <Def>
      <main>
        <div className="row" key={data.place.id}>
          <h1>{data.place.name}</h1>

          <div className="col">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="row">
            <div className="col">
              <h2>Description</h2>

              <h3>{data.place.showEstablished()}</h3>
              <h4>Serving {data.place.cuisines}</h4>
            </div>

            {rating}

            <div className="row">
              <a // edit  and delete
                href={`/places/${data.place.id}/edit`}
                className="btn btn-warning col"
              >
                Edit
              </a>
              <form
                className="col"
                method="POST"
                action={`/places/${data.place.id}?_method=DELETE`}
              >
                <div class="d-grid gap-2">
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </form>
            </div>
            <br />
          </div>
          <div className="row align-items-start">
            <h2>Comments</h2>
            {comments}
          </div>
          <form method="POST" action={`/places/${data.place.id}/comment`}>
            <div className="form-group col">
              <label htmlFor="author">Author</label>
              <input className="form-control" id="author" name="author" />
            </div>

            <div className="form-group col">
              <label htmlFor="content">Content</label>
              <textarea
                className="form-control"
                id="content"
                name="content"
                // type="textarea"
                row="5"
              />
            </div>

            <div className="form-group col">
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

            <div className="form-group col">
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
