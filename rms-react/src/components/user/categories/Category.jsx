import React from "react";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <section className="category">
      <div className="category-container">
        <div className="category-container-info">
          <h1 className="category-container-info__heading">Browse Category</h1>
          <p className="category-container-info__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et
            facere impedit reiciendis, commodi illum.
          </p>
        </div>
        <div className="category-container--card-wrapper">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </div>
      </div>
    </section>
  );
};

export default Category;
