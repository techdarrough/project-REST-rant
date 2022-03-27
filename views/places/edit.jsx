import React from "react";
import Def from "../default";

let edit_form = (data) => (
  <Def>
    <main>
      <h1>Edit Page</h1>
      <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
        <div className="container"></div>
        <div className="row">
          <div className="form-group col-sm-6 col-md-4 col-lg-3">
            <label htmlFor="name">Place Name</label>
            <input
              className="form-control col-sm-6 col-md-4 col-lg-3"
              id="name"
              name="name"
              value={data.place.name}
              required
            />
          </div>
          <div className="form-group col-sm-6 col-md-4 col-lg-3">
            <label htmlFor="pic">Place Picture</label>
            <input
              className="form-control"
              id="pic"
              name="pic"
              value={data.place.pic}
            />
          </div>
          <div class="container">
  <div class="row align-items-start">
        <div className="form-group col-sm-6 col-md-4 col-lg-3">
          <label htmlFor="city">City</label>
          <input
            className="form-control"
            id="city"
            name="city"
            value={data.place.city}
          />
        </div>
        <div className="form-group col-sm-6 col-md-4 col-lg-3">
          <label htmlFor="state">State</label>
          <input
            className="form-control"
            id="state"
            name="state"
            value={data.place.state}
          />
          </div>
        </div>
        <div className="form-group col-sm-6 col-md-4 col-lg-3">
          <label htmlFor="cuisines">Cuisines</label>
          <textarea
            className="form-control"
            id="cuisines"
            name="cuisines"
            type="textArea"
            row="3"
            value={data.place.cuisines}
            required
          />
          </div>
          <div className="form-group col-sm-6 col-md-4 col-lg-3">
          <label htmlFor="founded">Founded</label>
          <input
            className="form-control"
            id="founded"
            name="founded"
            value={data.place.founded}
            required
          />
          </div>
        </div>
        </div>
        <input className="btn btn-primary" type="submit" value="Add Place" />
      </form>
    </main>
  </Def>
);

module.exports = edit_form;
