import React from "react";
import { RichText } from "prismic-reactjs";

const ImageWithText = ({ slice }) => {
  return (
    <div
      className={
        "image-with-text " + slice.primary.image_placement.toLowerCase()
      }
    >
      <div className={"image"}>
        <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      </div>
      <div className="text">{RichText.render(slice.primary.text)}</div>
    </div>
  );
};

export default ImageWithText;
