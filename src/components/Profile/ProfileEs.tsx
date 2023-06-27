import { PdaSelector } from "../PdaSelector";
import logo from '../../assets/images/logo.webp';

function ProfileEs() {
  return (
    <section className="Profile">
      <h2 className="Profile-title">
        Alexis Jauge
      </h2>
      <h3 className="Profile-subtitle">
        Desarrollador Web
      </h3>
      <div className="Profile-info">
        <figure>
          <img src={logo} alt="Logo de VanDeFlame" />
        </figure>

        <ul>
          <li className="Profile-info-item">
            <PdaSelector text="20 años" />
          </li>
          <li className="Profile-info-item">
            <PdaSelector text="27 de Agosto" />
          </li>
          <li className="Profile-info-item">
            <PdaSelector text="Masculino" />
          </li>
        </ul>
      </div>

      <div>
        <h3>Habilidades</h3>
        <ul>
          <li>Frontend: React, TypeScript, HTML, CSS</li>
          <li>Backend: Java, NodeJS, Springboot, Express</li>
          <li>Bases de datos: SQL</li>
        </ul>
      </div>

      <div>
        <h3>Dominio de Idiomas</h3>
        <ul>
          <li>Hablante nativo de español</li>
          <li>Nivel B1 de inglés</li>
          <li>Aprendiendo portugués actualmente</li>
        </ul>
      </div>

			<div>
				<h3>Intereses</h3>
				<p>Explorando diversos campos del conocimiento, incluyendo diseño, física, matemáticas, historia y otros temas</p>
			</div>
    </section>
  );
}

export default ProfileEs;