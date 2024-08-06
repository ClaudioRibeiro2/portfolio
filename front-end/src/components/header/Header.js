import "./Header.css";

function Header() {
  const days = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];

  return (
    <header className="site-header">
      <section className="title">
        <a href="/">
          <p className="date">
            <span className="day">
              {days[new Date().getDay()]}
              ,&nbsp;
              {new Date().toLocaleString("pt-BR", { day: "2-digit" })}
            </span>
            &nbsp;de&nbsp;
            <span className="month">
              {new Date().toLocaleString("pt-BR", { month: "long" })}
            </span>
            &nbsp;
            <span className="year">{new Date().getFullYear()}</span>
          </p>
          <h1 className="site-title">CLAUDIO CONTI R.</h1>
        </a>
      </section>
      <nav className="nav-container">
        <ul>
          <li>
            <a href="/about/">SOBRE MIM</a>
          </li>
          <li>
            <a href="/curriculum/">CURRÍCULO</a>
          </li>
          <li>
            <a href="/notes/">ANOTAÇÕES</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;