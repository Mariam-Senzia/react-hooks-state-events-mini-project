import React from "react";

function CategoryFilter({ categories }) {

  function handleCategory (items) {
    console.log("Selected Category:",items);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((items) => (
      <button 
      key={items} 
      className={items === "All" ? "" : "selected"}
      onClick ={() => handleCategory(items)}
      >
      {items}
      </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
