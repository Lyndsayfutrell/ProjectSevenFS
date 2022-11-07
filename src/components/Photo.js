import React from "react";

function Photo(props) {
  const url = `https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}_c.jpg`
  return (
      <li>
        <img
          src={url}
          alt={props.title}
        />
      </li>
  );

}


export default Photo;
