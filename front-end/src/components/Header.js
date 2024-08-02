import './Header.css';

function Header(){
    return (
    <header className="header">
        <div className="titles">
            <h1>
                <a href="/">CLAUDIO CONTI R.</a>
            </h1>
        </div>
        <div className="nav-container">
            <a href="/about">Sobre mim</a>
            <a href="/curriculum">Currículo</a>
            <a href="/notes">Anotações</a>
        </div>
    </header>
    );
}

export default Header;