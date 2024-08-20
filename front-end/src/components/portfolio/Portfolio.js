import Project from "../project/Project";
import "./Portfolio.css";

function Portfolio() {
  return (
    <article className="portfolio-container">
      <h1 className="portfolio-title">PORTFOLIO</h1>
      <Project
        repository="google.com"
        name="Google"
        description="A website that find other websites, based in keyphrases."
      />
      <Project
        repository="youtube.com"
        name="Youtube"
        description="A website that you can post videos, and people can watch it, for free."
      />
    </article>
  );
}

export default Portfolio;