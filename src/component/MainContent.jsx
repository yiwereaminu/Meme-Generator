import { Form, Row, Col, Button, Container } from "react-bootstrap";
// import PropTypes from "prop-types";
import memesData from "/memesData.jsx";
import { useState } from "react";

const MainContent = () => {
  let [memeImage, setMemeImage] = useState("");
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    memeImage = memesArray[randomNumber].url;
    setMemeImage(memesArray[randomNumber].url);
    console.log(setMemeImage(memesArray[randomNumber].url));
    return setMemeImage(memesArray[randomNumber].url);
  }

  // console.log(getMemeImage());
  return (
    <Container>
      <Form className="form-content">
        <Row className="mb-3">
          <Col>
            <Form.Label className="text-center">Top Text</Form.Label>
            <Form.Control type="text" placeholder="Enter top text" />
          </Col>
          <Col>
            <Form.Label className="text-center">Bottom Text</Form.Label>
            <Form.Control type="text" placeholder="Enter bottom text" />
          </Col>
        </Row>
      </Form>
      <Button
        variant="primary"
        type="submit"
        id="submit-button"
        onClick={getMemeImage}
      >
        Get a new meme image 🖼
      </Button>
      <div>
        <img src={memeImage ? memeImage : ""} alt="meme image" id="meme-img" />
      </div>
    </Container>
  );
};

// MainContent.propTypes = {
//   memeImg: PropTypes.array.isRequired,
//   getImageUrl: PropTypes.func.isRequired,
// };

export default MainContent;
