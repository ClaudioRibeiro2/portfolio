import './Main.css';
import Introduction from '../introduction/Introduction';
import Portfolio from '../portfolio/Portfolio';

function Main(){
    return(
        <main className="main">
            {/* Sobre mim, Experiência, Currículo */}
            <Introduction />
            {/* Projetos */}
            <Portfolio />
        </main>
    );
}

export default Main;