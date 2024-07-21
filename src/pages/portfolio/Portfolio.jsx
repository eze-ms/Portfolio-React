import React, { useState } from 'react';
import { portfolio } from '../../data';
import PortfolioItem from '../../componentes/PortfolioItem';
import Filter from '../../componentes/FilterCategory';
import "./Portfolio.css";

const Portfolio = () => {
  const [filteredPortfolio, setFilteredPortfolio] = useState(portfolio);
  const [showMore, setShowMore] = useState(false);

  const handleCategorySelect = (category) => {
    if (category === 'Todos') {
      setFilteredPortfolio(portfolio);
    } else {
      const filteredProjects = portfolio.filter(project => project.category === category);
      setFilteredPortfolio(filteredProjects);
    }
    setShowMore(false); // Reset show more when category changes
  };

  const allCategories = ['Todos', ...new Set(portfolio.map(project => project.category))];

  const visibleProjects = showMore ? filteredPortfolio : filteredPortfolio.slice(0, 6);

  return (
    <section className="portfolio section">
      <h2 className="section__title">Mis<span> Proyectos</span></h2>
      {/* <p className='subtitle'>"Detrás de cada proyecto hay un mundo por descubrir"</p> */}
      
      <Filter categories={allCategories} onSelectCategory={handleCategorySelect} />

      <div className="portfolio__container container grid">
        {visibleProjects.map((item) => {
          return <PortfolioItem key={item.id} {...item}/>
        })}
      </div>
      
      {!showMore && filteredPortfolio.length > 6 && (
        <button className="show-more-button" onClick={() => setShowMore(true)}>
          Ver más
        </button>
      )}
    </section>
  );
}

export default Portfolio;
