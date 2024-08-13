import "./index.css";

export function Curriculum() {
  return (
    <div className="curriculum-container">
      <iframe title="PDF" src="/curriculo_pt-br.pdf" />
      <a href="/curriculo_pt-br.pdf" target="_blank">
        <a href="/curriculo_pt-br.pdf" download>
          BAIXAR CURRICULO
        </a>
      </a>
    </div>
  );
}
