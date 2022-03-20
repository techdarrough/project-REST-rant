import React from "react";
import Def from "../default";

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <a href={`/places/${data.id}/edit`} className="btn btn-warning">
              Edit
            </a>
          </div>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
