import './Header.css';

function Header(){
    return (
    <header className="header">
        <div className="title">
            <h1>
                <a href="/">CLAUDIO CONTI R.</a>
            </h1>
        </div>
        <nav className="nav-container">
            <a href="/about">Sobre mim</a>
            <a href="/curriculum">Currículo</a>
            <a href="/notes">Anotações</a>
        </nav>
    </header>
    );
}

export default Header;