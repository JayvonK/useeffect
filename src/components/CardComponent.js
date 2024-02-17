import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


//We are passing in our properties as a parameter in our card component function
function CardComponent(props) {

    useEffect(() => {
       console.log(props); 
    })

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.digiImg} />
      <Card.Body>
        <Card.Title>{props.digiName}</Card.Title>
        <Card.Text>
          {props.digiLevel}
        </Card.Text>
        {/* digiEvolution is being passed down as an array  */}
        {/* "?" is a ternary is an if else statement written in different syntax */}
        {/*  adding ? checks if props.digiEvolution exists (is defined) if it is then we can map through our data if not we display no evolutions found */}
        {/* can also add && */}
        {/* if you need to handle more complicated if else, you can use a function to do your comparisons and pass it through the ternary */}
          {props.digiEvolutions ? props.digiEvolutions.map(evol => {
            // For every index inside of our digiEvolution array we perform this arrow function

            return(
              <Card.Text key={evol.name}>
                {evol.name}
              </Card.Text>
            ) 
          }) : <Card.Text>No Evolutions found</Card.Text>}
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;