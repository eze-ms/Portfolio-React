import React from 'react';
import { portfolio } from '../../data';
import PortfolioItem from '../../componentes/PortfolioItem';
import "./Portfolio.css";

const Portfolio = () => {
  
return (
    <section className="portfolio section">
      <h2 className="section__title">Mis<span> Proyectos</span></h2>
      <p className='subtitle'>"Detrás de cada proyecto hay un mundo por descubrir"</p>
      <div className="portfolio__container container grid">
        {portfolio.map((item) => {
          return <PortfolioItem key={item.id} {...item}/>
         })}
       </div>


    </section>
  )
}

export default Portfolio 
