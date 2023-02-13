import React from "react";
import "./portfolio.css";

function Portfolio() {
    return (
        <div className="portfolio__container">
            <div className="portfolio__border">
                <div className="portfolio__header">Portfolio</div>
                <div className="portfolio__item_container">
                    <div className="portfolio__item">1</div>
                    <div className="portfolio__item">2</div>
                    <div className="portfolio__item">3</div>
                    <div className="portfolio__item">4</div>
                    <div className="portfolio__item">5</div>
                    <div className="portfolio__item">6</div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
