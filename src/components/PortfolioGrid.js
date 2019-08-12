import React, { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import image011 from "../file/portfolio/image-011.jpg";
import image021 from "../file/portfolio/image-021.jpg";
import image031 from "../file/portfolio/image-031.jpg";
import image041 from "../file/portfolio/image-041.jpg";
import image051 from "../file/portfolio/image-051.jpg";
import image061 from "../file/portfolio/image-061.jpg";
import image071 from "../file/portfolio/image-071.jpg";
import PortfolioGridItem from "./PortfolioGridItem";
import PortfolioGridFilter from "./PortfolioGridFilter";

function PortfolioGrid(data) {
    const [grid, setGrid] = useState({});
    useEffect(() => {
        const grid2 = document.querySelector(".js-masonry");
        var $portfolioMasonry = new Isotope(grid2, {
            itemSelector: '.gallery-grid__item',
            layoutMode: 'masonry',
            percentPosition: true,
            transitionDuration: '0.5s',
            hiddenStyle: {
                opacity: 0,
                transform: 'scale(0.001)'
            },
            visibleStyle: {
                opacity: 1,
                transform: 'scale(1)'
            },
            fitRows: {
                gutter: '.gutter-sizer'
            },
            masonry: {
                columnWidth: '.gallery-grid__item',
                gutter: '.gutter-sizer',
                isAnimated: true
            }
        });
        new imagesLoaded($portfolioMasonry, function () {
            console.log("ASDSADSAD");
            $portfolioMasonry.arrange({
                columnWidth: '.gallery-grid__item',
                gutter: '.gutter-sizer',
                layoutMode: 'masonry',
            });
        });
        setGrid($portfolioMasonry);
    }, [])

    function onLoadEvent(grid) {
        setTimeout(() => {
            if (Object.entries(grid).length !== 0) {
                console.log("test");
                grid.arrange(grid.options);
            }
        }, 100);
    }
    return (
        <React.Fragment>
            <PortfolioGridFilter onLoad={onLoadEvent(grid)}  grid={grid} />
            {/*Content*/}
            <div className="gallery-grid js-masonry js-filter-container">
                <div className="gutter-sizer"></div>
                <PortfolioGridItem portfolio_category_class="category-php" portfolio_image={image011} portfolio_title="Daaman Design" portfolio_category="PHP" portfolio_link="/portfolio/daaman-design/" />
                <PortfolioGridItem portfolio_category_class="category-android" portfolio_image={image021} portfolio_title="Happening.PK Organizer App" portfolio_category="Android" portfolio_link="/portfolio/happening-pk-organizer/" />
                <PortfolioGridItem portfolio_category_class="category-android" portfolio_image={image031} portfolio_title="Happening.PK App" portfolio_category="Android" portfolio_link="/portfolio/happening-pk-app/" />
                <PortfolioGridItem portfolio_category_class="category-php" portfolio_image={image041} portfolio_title="Happening.PK" portfolio_category="PHP" portfolio_link="/portfolio/happening-pk/" />
                <PortfolioGridItem portfolio_category_class="category-php" portfolio_image={image051} portfolio_title="Forrun.co" portfolio_category="PHP" portfolio_link="/portfolio/forrun-co/" />
                <PortfolioGridItem portfolio_category_class="category-wordpress" portfolio_image={image061} portfolio_title="NKH Group" portfolio_category="Wordpress" portfolio_link="/portfolio/nkh-group/" />
                <PortfolioGridItem portfolio_category_class="category-wordpress" portfolio_image={image071} portfolio_title="Amber Batool" portfolio_category="Wordpress" portfolio_link="/portfolio/amber-batool/" />
            </div>
        </React.Fragment>
    );
}

export default PortfolioGrid;