import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ name, icon, count, slug }) => {
  return (
    <div className="category-container--card-wrapper__card">
      <img src={icon} alt="Category-icon" width="100px" height="100px" />
      <Link to={`categories/jobs/${slug}`}>
        <h1>{name}</h1>
      </Link>
      <p>{count}</p>
    </div>
  );
};

export default CategoryItem;
