import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "prismic-reactjs";
import { linkResolver } from "../../prismic-configuration";

/**
 * React link for Prismic link fields
 */
const PrismicLink = ({ link, linkClass, children }) => {
  if (link.link_type === "Web") {
    return (
      <a href={link.url} className={linkClass}>
        {children}
      </a>
    );
  }
  const linkUrl = Link.url(link, linkResolver);

  if (linkUrl && children !== "") {
    return (
      <RouterLink className={linkClass} to={linkUrl}>
        {children}
      </RouterLink>
    );
  }

  return null;
};

export default PrismicLink;
