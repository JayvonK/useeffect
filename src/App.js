import "./App.css";
import { Button, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { getDigimon } from "./dataservices/DataServices.js";
import CardComponent from "./components/CardComponent.js";
import digimonArray from "./dataservices/digimon.json";

function App() {
  //useEffect Hook that updates the state of name by calling the function setName
  const [name, setName] = useState("Jacooz");
  const [digimon, setDigimon] = useState([]);
  const [digiArr, setDigiArr] = useState([]); // Can also pass through (digimonArray) in the useState parameters

  const handleClick = () => {
    setName("Evil Jacoozi");
  };

  // every time the component state is rerendered the useEffect Hook is ran.
  //This hook runs as soon as the component is rendered
  useEffect(() => {
    //useEffects cannot be async functions but they can have async functions inside of them and call data
    const getData = async () => {
      let newInfo = await getDigimon();
      setDigiArr(digimonArray.Digimon);
      setDigimon(newInfo);
    };
    getData();

    console.log("Use Effect Ran");
  }, [name]); //Dependancy array - what ever is in our dependancy array will effect whether or not our useEffect will run

  return (
    <>
      {/* Calling our state Variable in the JSX using { } */}
      <h1>{name}</h1>

      {/* Called our Button component from the Bootstrap library and called onClick Function */}
      <Button variant="dark" onClick={() => handleClick()}>
        Dark
      </Button>
      {/* properties are a way to pass information from a parent component to a child component */}
      <CardComponent
        digiImg={digimon.img}
        digiName={digimon.name}
        digiLevel={digimon.level}
      />

      <Row>
        {/* We are mapping through our digiArr */}
        {digiArr.filter(digimon => digimon.type === "Mammal").map((digimon) => {
          // every digimon in our array needs a unique key

          //Can create your own unique id, then pass it through key, below is just an example
          const uniqueId = digimon.name + digimon.level;

          //map always needs a return
          return (
            //without a key in our JSX return, react will throw errors
            <Col key={digimon.id}>
              <CardComponent digiImg={digimon.img} digiName={digimon.name} digilLevel={digimon.level} digiEvolutions={digimon.evolutions}/>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default App;
