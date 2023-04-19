import React, { useState } from "react";
// import Image1 from '../../images';
import PageHeaderContent from "../../components/pageHeaderContent";
import "./style.scss";
import { AiFillProject } from "react-icons/ai";
import { filterOptions, portfolioData } from "./utils";
import { Animate } from 'react-simple-animate'

const Portfolio = () => {
  const [filterValue, setFilterValue] = useState(1);
  const [hoveredindex, setHoveredIndex] = useState(null);
  const handleFilter = (id) => {
    setFilterValue(id);
  };
  const filteredPortfolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue);
  console.log(filteredPortfolioData);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText=" My Portfolio"
        icon={<AiFillProject size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterOptions.map((option) => (
            <li
              onClick={() => handleFilter(option.id)}
              key={`filter${option.id}`}
              className={option.id === filterValue ? 'active' : ''}
            >
              {option.label}
            </li>
          ))}
        </ul>
        <Animate
          play
          delay={1}
          start={{
            opacity: 0,
          }}
          end={{
            opacity: 1,
          }}
          duration={1}

        >


          <div className="portfolio__content__cards">
            {filteredPortfolioData.map((item, key) => (
              <div
                key={key}
                className="portfolio__content__cards__item"
                onMouseEnter={() => setHoveredIndex(key)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a>
                    <img src={item.image} />
                  </a>
                </div>
                <div className="overlay">
                  {
                    hoveredindex === key && (

                      <div>
                        <p>{item.projectName}</p>
                        <p>{item.tools}</p>
                        <a href={item.projectLink} target="_blank" rel="noreferrer">Visit</a>
                        <a href={item.projectCode} target="_blank" rel="noreferrer">Code</a>
                      </div>
                    )

                  }
                </div>
              </div>
            ))}
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Portfolio;
