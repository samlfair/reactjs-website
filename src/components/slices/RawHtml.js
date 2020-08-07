import React from "react";

const RawHtml = ({ slice }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: slice.primary.html[0].text }} />
  );
};

export default RawHtml;
