import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NavbarComponent from "./components/Navbar";
import { Row } from "react-bootstrap";

function App() {
  const [q, setQ] = useState("");
  const [data, setData] = useState([]);

  function handleInput(e) {
    setQ(e.target.value);
  }

  async function fetchData(name) {
    const response = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${name}`
    );

    setData(response.data);
  }

  useEffect(() => {
    fetchData(q);
  }, [q]);
  return (
    <div className="App">
      <NavbarComponent />

      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Search for a Show"
          onChange={(e) => handleInput(e)}
        />
      </InputGroup>

      <Row>
        {data.map((item) => {
          return (
            <Card style={{ width: "17rem", margin: "10px" }}>
              <Card.Img
                variant="top"
                height="220px"
                style={{ objectFit: "cover" }}
                src={item.show.image?.original}
              />
              <Card.Body>
                <Card.Title>{item.show.name}</Card.Title>
                <Card.Text>{item.show.summary?.substring(3, 100)}...</Card.Text>
                <a href={item.show.url}>
                  <Button variant="primary">See more</Button>
                </a>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
