import React from "react";
import NoResults from "./NoResults";
import Photo from "./Photo";

const PhotoContainer = props => { 

    const results = props.data;

    let images;
    if (results.length > 0) {
        images = results.map(image =>
            <Photo 
              server={image.server} secret={image.secret} key={image.id} id={image.id} title={image.title}/>
            );
        }
  return (
    <div className="photo-container">
      <h2>Results</h2>
      {(results.length > 0)
      ? <ul>{images}</ul>
      : <NoResults />
      }   
    </div>   
  );     
}


export default PhotoContainer;
