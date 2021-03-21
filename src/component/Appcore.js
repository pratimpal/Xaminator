import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Button from 'react-bootstrap/Button';

import subject from "./../sample_data/subject.json";

function Appcore() {
    const newdata = subject.map( (subject) => {
      return (
        <Card style={{ width: '20rem' }} key={subject.id}>
        <Card.Img variant="top" src={subject.imgurl} />
        <Card.Body>
            <Card.Title>{subject.fullname}</Card.Title>
            <Card.Text>
            <p>{subject.author}</p>
            <p>{subject.lastmodified}</p>
            </Card.Text>
            <Button variant="primary">Take Test</Button>
        </Card.Body>
        </Card>
      );
    })

    return (
        <CardColumns className=" m-3 p-3 owncard ">  {newdata}  </CardColumns>
    )
}
    
export default Appcore;
    