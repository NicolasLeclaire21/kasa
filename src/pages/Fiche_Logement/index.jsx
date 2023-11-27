import Carrousel from "../../components/Carrousel";
import './logement.scss'
import Tag from "../../components/Tag";
import Collapse from "../../components/Collapse";
import Note from "../../components/Note";
import Profil from "../../components/Profil";

function Logements({logement}) {
  return (
    <div className="logement">
      <Carrousel items={logement.pictures}/>
      <div className="logement__head">
        <div className="logement__head__left">
          <h2 className="logement__titre">{logement.title}</h2>
          <p className="logement__localisation">{logement.location}</p>
          <div className="logement__tags">
            {logement.tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </div>
        <div className="logement__head__right">
          <Profil nom={logement.host.name} image={logement.host.picture}/>
          <Note note={logement.rating}/>
        </div>
      </div>
      <div className="logement__collapse">
          <Collapse title="Description" text={logement.description} />
          <Collapse title="Équipement" text={logement.equipments.map((equipment) => (
           <li>{equipment}</li>
        ))} />
          
      </div>
    </div>
  );
};

export default Logements;