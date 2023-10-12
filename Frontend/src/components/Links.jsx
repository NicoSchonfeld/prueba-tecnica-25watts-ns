import React from "react";

const Links = ({ children, path = "#home", target = "_parent", className }) => {
  return (
    <a href={path} target={target} className={className}>
      {children}
    </a>
  );
};

export default Links;
