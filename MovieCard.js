import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'react-route-Dom';


function MovieCard (props){



    return (

        <Card  style={{ width: '300px', border:'solid' , paddingTop:'10px' }}>

        <Card.Body>
          <Card.Title style={{}}>{props.title}</Card.Title>
          <Card.Text>
            Discrption: {props.description}
          </Card.Text>
          <Card.Link>{props.posterURL}</Card.Link>
          <Card.Text>{props.rating}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> );
       <link to="/path" component={component.MovieCard}>button</link>
}

export default MovieCard; 