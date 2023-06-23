import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "./portfolio.css";
// import img1 from "../../assets/port.PNG";

const Portfolio = () => {

  const[data, setData] = useState([]);

  useEffect(()=> {
    axios.get("https://djituebrinda.cyclic.app/api/portfolio").then(response => {
      const formattedData = response.data.data.map(item => ({
        id: item._id,
        image: item.image,
        title: item.title,
        github: item.github,
        demo: item.demo
      }));
      setData(formattedData)
    }).catch(error => {
      console.log("Error fetching portfolio data:", error);
    })
  }, [])

  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
        data.map(({id, image, title, github, demo}) =>(
          // return (
            <article key={id} className="portfolio__item">
              <div className="portfolio_item_image">
                <img src={image} alt={title} className="portImage" />
              </div>
              <h3> {title} </h3>
              <div className="portfolio_item_cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          // );
        ))
      }
      </div>
    </section>
  );
};
export default Portfolio;