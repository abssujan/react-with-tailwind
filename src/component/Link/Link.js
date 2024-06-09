import React from "react";

const Link = (props) => {
  const { name, path } = props.route;
  return (
    <li className="mr-12">
      <a href={path}>{name}</a>
    </li>
  );
};

export default Link;
