import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav.jsx";

import Home from "./pages/Home.jsx";

function AppRouteur() {
  return (
    <BrowserRouter>
<Nav></Nav>
    </BrowserRouter>
  );
}

export default AppRouteur;
