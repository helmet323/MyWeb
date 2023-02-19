import React from "react";
import "./portfolio.css";

function Portfolio({ projects }) {
    return (
        <div className="portfolio__container" id="portfolio">
            <div className="portfolio__border">
                <div className="portfolio__header">Portfolio</div>
                <div className="portfolio__item_container">
                    {projects.map((item) => (
                        <div className="portfolio__item">
                            <img
                                className="portfolio__item_img"
                                src={item.img}
                                alt=""
                            />
                            <div className="portfolio__item_title">
                                {item.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
