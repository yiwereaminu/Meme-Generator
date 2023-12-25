import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainNavbar from "./component/MainNavbar";
import MainContent from "./component/MainContent";
import memesData from "../memesData";
import { useState } from "react";

function App() {
  const [memeImage, setMemeImage] = useState("");
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    console.log(memeImage);
    return setMemeImage(memesArray[randomNumber].url);
  }
  // console.log(getMemeImage);
  return (
    <>
      <MainNavbar />
      <MainContent />
    </>
  );
}

export default App;
