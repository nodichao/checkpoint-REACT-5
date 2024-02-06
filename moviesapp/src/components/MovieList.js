import { MovieCard } from "./MovieCard";
import { movies } from "../Movies";
import { titles } from "../Titles";
import { useRef, useState } from "react";
import { Button, Form, FloatingLabel, Dropdown } from "react-bootstrap";
import "./MovieList.css";


export function MovieList() {
  const [count, setCount] = useState(3);
  const [selectedRating, setSelectedRating] = useState("0");
  const [RTitle,setRTitle] = useState('');
  let title = useRef('');
  const addHanler = () => {
    setCount(count+1);

    let form = document.getElementById("form");
    let formData = new FormData(form);

    movies.push({
      title: formData.get("title"),
      description: formData.get("description"),
      rating: parseInt(formData.get("rating")),
      posterUrl: "/logo.png",
    });
    
    titles.push(formData.get("title").trim().toLowerCase());
  };

  const selectHandler = (value) => {
    setSelectedRating(value);
  };

  const searchHandler = (event)=>{
      event.preventDefault();
      if((movies.filter(movie=>movie.title.toLowerCase()===title.current.value.toLowerCase())).length !== 0){
        setRTitle(title.current.value);
      }else{
        setRTitle('');
      }
  }
  return (
    <>
      <div className="navbar">
        <div className="nav1">
          <img
            src="/logo.png"
            alt="logo"
            style={{ width: "50%", borderRadius: "50%" }}
          />
        </div>
        <div className="nav2">
          <a href="#form" title="ajouter">
            <img
              src="/ajouter.png"
              alt="ajouter"
              style={{
                width: "10%",
                backgroundColor: "white",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
          </a>
        </div>
        <div className="nav3">
          <Dropdown onSelect={selectHandler}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Rating Filter
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey={0}>All movies</Dropdown.Item>
              <Dropdown.Item eventKey={1}>1</Dropdown.Item>
              <Dropdown.Item eventKey={2}>2</Dropdown.Item>
              <Dropdown.Item eventKey={3}>3</Dropdown.Item>
              <Dropdown.Item eventKey={4}>4</Dropdown.Item>
              <Dropdown.Item eventKey={5}>5</Dropdown.Item>
              <Dropdown.Item eventKey={6}>6</Dropdown.Item>
              <Dropdown.Item eventKey={7}>7</Dropdown.Item>
              <Dropdown.Item eventKey={8}>8</Dropdown.Item>
              <Dropdown.Item eventKey={9}>9</Dropdown.Item>
              <Dropdown.Item eventKey={10}>10</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <form id="search" onSubmit={searchHandler}>
            <input type="text" name="recherche"  ref={title}/>
            <button><img src="/search.png" style={{width:"15px"}} alt="search"/></button>
          </form>
        </div>
      </div>
      <div className="myCards">
        {selectedRating === "0"   && RTitle === '' &&
          movies.map((movie) => (
            <MovieCard
              title={movie.title}
              description={movie.description}
              posterUrl={movie.posterUrl}
              rating={movie.rating}
            />
          )) }

        {selectedRating !== "0"   && RTitle==='' &&
          movies
            .filter((movie) => movie.rating === parseInt(selectedRating))
            .map((movie) => (
              <MovieCard
                title={movie.title}
                description={movie.description}
                posterUrl={movie.posterUrl}
                rating={movie.rating}
              />
            ))
        }
           
        {
            
           RTitle !== '' &&
           movies.filter(movie=>movie.title.toLowerCase()===RTitle.toLowerCase()).map((movie) => (
            <MovieCard
              title={movie.title}
              description={movie.description}
              posterUrl={movie.posterUrl}
              rating={movie.rating}
            />
          ))
       }
       
        

       
        
            
      </div>
      <Form style={{ margin: "25px 25%" }} id="form">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the title"
            name="title"
            required
          />
        </Form.Group>
        <FloatingLabel controlId="floatingTextarea2" label="Description">
          <Form.Control
            as="textarea"
            placeholder="Give Your description"
            style={{ height: "100px" }}
            name="description"
            required
          />
        </FloatingLabel>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            min={1}
            max={10}
            placeholder="Give a rating"
            name="rating"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            placeholder="Give a rating"
            name="image"
            required
          />
        </Form.Group>
        <Button onClick={addHanler}>Add movie</Button>
      </Form>
    </>
  );
}
