import { Card } from "react-bootstrap";
import "./MovieCard.css";
import { Link } from "react-router-dom";

export function MovieCard(props) {
  return (
    <>
      <Link to={`/description/${props.title}`}>
        <div className="myCard">
          <Card style={{ width: "18rem", position: "relative" }}>
            <Card.Img
              variant="top"
              src={props.posterUrl}
              style={{ height: "350px" }}
            />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text
                className="description"
                style={{ color: "black" }}
                id="description"
              >
               
              </Card.Text>
              <p>
                <b>Rating : {props.rating}</b>
              </p>
            </Card.Body>
          </Card>
        </div>
      </Link>
      
    </>
  );
}
