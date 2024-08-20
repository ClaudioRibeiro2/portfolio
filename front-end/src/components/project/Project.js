import { GithubCard } from "../svg-imgs/SvgImgs";
import "./Project.css";

export default function Project(props) {
  return (
    <section className="project-container">
      <a href={`${props.repository}`}>
        <div className="project-title">
          <GithubCard />
          <h1>{props.name}</h1>
        </div>
        <p>{props.description}</p>
      </a>
    </section>
  );
}
