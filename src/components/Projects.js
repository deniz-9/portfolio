import React from "react";
import Cards from "./Cards";
import { useTranslation } from "react-i18next";
import Pizza from "../contents/pagePhotos/teknolojik-yemekler.png";
import movies from "../contents/pagePhotos/movies.png";
import jokes from "../contents/pagePhotos/jokes.png";
import shopping from "../contents/pagePhotos/shopping.png";
import calculator from "../contents/pagePhotos/calculator.png";
import friends from "../contents/pagePhotos/watchlist.png";

const Projects = ({ darkMode }) => {
  const { t } = useTranslation();
  return (
    <div className="projectsContainer">
      <div className="cizgi"></div>
      <div className="projectsText">
        <h1>{t("projectsTitle")}</h1>
      </div>
      <div className="projectItems">
        <Cards
          darkMode={darkMode}
          imgSrc={Pizza}
          title={t("pizzaTitle")}
          text={t("pizzaText")}
          githubLink="https://github.com/deniz-9/fsweb-s7-challenge-pizza"
          siteLink="https://fsweb-s7-challenge-pizza-kappa.vercel.app/"
          tags={["#React", "#Router", "#Axios", "#Yup"]}
        />
        <Cards
          darkMode={darkMode}
          imgSrc={movies}
          title={t("moviesTitle")}
          text={t("moviesText")}
          githubLink="https://github.com/deniz-9/fsweb-s11g3-crud-filmler"
          siteLink="https://fsweb-s11g3-crud-filmler-opal.vercel.app/movies"
          tags={["#React", "#Crud", "#Axios", "#Ajax"]}
        />
        <Cards
          darkMode={darkMode}
          imgSrc={jokes}
          title={t("jokesTitle")}
          text={t("jokesText")}
          githubLink="https://github.com/deniz-9/fsweb-s10g4-thunk-and-apis"
          siteLink="https://fsweb-s10g4-thunk-and-apis-phi.vercel.app/"
          tags={["#React", "#Router", "#Redux", "ReduxThunk", "#localStorage"]}
        />
        <Cards
          darkMode={darkMode}
          imgSrc={shopping}
          title={t("shoppingTitle")}
          text={t("shoppingText")}
          githubLink="https://github.com/deniz-9/fsweb-s11g1-shopping-cart"
          siteLink="https://fsweb-s11g1-shopping-cart-alpha.vercel.app/"
          tags={["#React", "#Router", "#Axios", "#Cypress"]}
        />
        <Cards
          darkMode={darkMode}
          imgSrc={calculator}
          title={t("calculatorTitle")}
          text={t("calculatorText")}
          githubLink="https://github.com/deniz-9/fsweb-s10g1-reducer-calculator"
          siteLink="https://fsweb-s10g1-reducer-calculator-lime.vercel.app/"
          tags={["#React", "#Router", "#Javascript", "#useReducer"]}
        />
        <Cards
          darkMode={darkMode}
          imgSrc={friends}
          title={t("watchListTitle")}
          text={t("watchListText")}
          githubLink="https://github.com/deniz-9/fsweb-s10g3-redux-watchlist"
          siteLink="https://fsweb-s10g3-redux-watchlist-lilac.vercel.app/"
          tags={["#React", "#Router", "#Redux", "#ReduxLogger"]}
        />
      </div>
    </div>
  );
};

export default Projects;
