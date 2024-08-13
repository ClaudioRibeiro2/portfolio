import "./index.css";

export function Curriculum() {
  return (
    <div className="curriculum-container">
      <iframe title="PDF" src="/curriculo_pt-br.pdf" />
      <a href="/curriculo_pt-br.pdf" target="_blank">
        <a href="/curriculo_pt-br.pdf" target="_blank">
          BAIXAR CURRICULO
        </a>
      </a>
      <a
        className="hidden-download"
        href="/curriculo_pt-br.pdf"
        target="_blank"
        download
      >
        BAIXAR CURRICULO
      </a>
    </div>
  );
}
