import React from 'react';
import { portfolio } from '../../data';
import PortfolioItem from '../../componentes/PortfolioItem';
import "./Portfolio.css";

const Portfolio = () => {
  
return (
  // <div id="portfolio">
    <section className="portfolio section">
      <h2 className="section__title"><span>Proyectos</span></h2>
      <p className='subtitle'>"Detrás de cada proyecto hay un mundo por descubrir"</p>
      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item}/>
         })}
       </div>
    </section>
//  </div>
      
  )
}

export default Portfolio 
