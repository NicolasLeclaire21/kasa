import Carrousel from "../../components/Carrousel";

function Logements({logement}) {
  return (
    <div>
      <Carrousel items={logement.pictures}/>
      <h2>{logement.title}</h2>
      <p>{logement.description}</p>
    </div>
  );
};

export default Logements;