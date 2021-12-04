//import logo from './logo.svg';
//Css
import "./App.scss";

//React
import React from "react";
//Componetes
import UiKit from "./component/UiKit/UiKit";
import Footer from "./component/nav/Footer/Footer";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./component/nav/NavBar/NavBar";

//bootstrap

//----------------------------------------------------------------------------------

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="cont">
          <NavBar />
          <div className="contenido">
            <Routes>
              <Route exact path="/" element={<UiKit />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
