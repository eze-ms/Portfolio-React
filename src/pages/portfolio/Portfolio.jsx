import React, { useState } from 'react';
import { portfolio } from '../../data';
import PortfolioItem from '../../componentes/PortfolioItem';
import Filter from '../../componentes/FilterCategory';
import "./Portfolio.css";

const Portfolio = () => {
  const [filteredPortfolio, setFilteredPortfolio] = useState(portfolio);
  
  const handleCategorySelect = (category) => {
    if (category === 'Todos') {
      setFilteredPortfolio(portfolio);
    } else {
      const filteredProjects = portfolio.filter(project => project.category === category);
      setFilteredPortfolio(filteredProjects);
    }
  };

  const allCategories = ['Todos', ...new Set(portfolio.map(project => project.category))];

  return (
    <section className="portfolio section">
      <h2 className="section__title">Mis<span> Proyectos</span></h2>
      {/* <p className='subtitle'>"Detrás de cada proyecto hay un mundo por descubrir"</p> */}
      
      <Filter categories={allCategories} onSelectCategory={handleCategorySelect} />

      <div className="portfolio__container container grid">
        {filteredPortfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item}/>
        })}
      </div>
    </section>
  );
}

export default Portfolio;
