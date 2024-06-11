import { useState } from 'react';
import "./FilterCategory.css";

const Filter = ({ categories, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="filter">
      <span className="filter__label"></span>
      <ul className="filter__list">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`filter__item ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
