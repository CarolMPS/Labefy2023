import './App.css';
import {useState} from "react";
import HeaderPlay from "./components/header"

function App() {

const [currentPage, setCurrentPage] = useState("playlistCreationPage");
const changePage = (currentPage) =>{
  setCurrentPage([...currentPage, currentPage])
}

  return (
    <div className="App">
      <h1>Bem Vindo</h1>
      <HeaderPlay 
      changePage = {changePage}/>
      {currentPage()}
    </div>
  );
}

export default App;
