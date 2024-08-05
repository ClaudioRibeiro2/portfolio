import "./Introduction.css";
import Formation from "../formation/Formation";
import Experience from "../experience/Experience";

function Introduction() {
  return (
    <article className="introduction-container">
      <section>
        <h1 className="aboutme-title">SOBRE MIM</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum
          ex vel tortor volutpat placerat. Nullam id nunc lectus. Vestibulum
          lacus odio, tempus ut malesuada ut, tincidunt iaculis purus.
          Vestibulum lobortis sagittis est, pulvinar eleifend neque tincidunt
          quis.
        </p>
      </section>
      <section>
        <h1 className="section-title">FORMAÇÃO</h1>
        <Formation
          degree="Diploma de ensino médio técnico"
          institution="SESI SENAI"
          local="Florianópolis"
          finishDate="2021"
          description="Ensino Médio Técnico em Análise e Desenvolvimento de Sistemas"
        />
        <p className="transition">...</p>
        <Formation
          degree="Bacharel em tecnologia"
          institution="UniSenai"
          local="Florianópolis"
          finishDate="07/2025"
          description="Graduação em Análise e Desenvolvimento de Sistema"
        />
      </section>
      <section>
        <h1 className="section-title">EXPERIÊNCIA</h1>
        <Experience
            company="Coppercoat Brasil"
            location="Florianópolis/SC"
            role="Aux. Administrativo / Financeiro"
            duration="Abril 2022 - Set. 2023"
            description="Emissão de NF's, emissão de boletos, contas a pagar, contas a receber, rastreio de mercadorias, contato com transportadoras, geração de relatórios comercias e financeiros, manuntenção do ERP, etc..."
        />
      </section>
      <section>
        {/* Currículo */}
      </section>
    </article>
  );
}

export default Introduction;
