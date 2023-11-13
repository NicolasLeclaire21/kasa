import Banner from "../../components/Banner";
import Card from "../../components/Card";
import jsonData from '../../data.json'
import BannerImg from "../../assets/BANNER.jpg"
import './home.scss'

function App() {
  return (
    <div className="App">
      <Banner image={BannerImg}/>
      <div className="cards">
        {jsonData.map((logement) => (
          <Card
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
