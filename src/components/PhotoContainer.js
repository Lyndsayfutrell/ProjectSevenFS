import React from "react";
import NoResults from "./NoResults";
import Photo from "./Photo";

function PhotoContainer = props => { 

    const results = props.data;
    let images;
    if (images.length > 0) {
        images = results.map(image =>
            <Photo server={image.photo.server} />
            );
    } else {
        images = <NoResults />
    }
  return (
    <div class="photo-container">
      <h2>Results</h2>
      {images}
    </div>
  );
}

export default PhotoContainer;
