import "./Experience.css";

function Experience(props) {
  return (
    <div className="experience-container">
      <h4>{props.company}</h4>
      <p>{props.location}</p>
      <p>{props.role}</p>
      <p>{props.duration}</p>
      <p>{props.description}</p>
    </div>
  );
}

export default Experience;
