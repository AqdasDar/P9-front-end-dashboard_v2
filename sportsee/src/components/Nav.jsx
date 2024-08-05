import logo from "../assets/logo.png";
import "./Nav.css";
import {NavLink} from "react-router-dom";
function Nav() {
    return (
        <div className="Nav">
            <header className="Nav-header">
                <Nav className="Nav-menu">
                    <ul className="Nav-list">
                        <img className="Logo" src={logo} alt="logo"/>
                        <NavLink className="Nav-item" to="/">Accueil</NavLink>
                        <NavLink className="Nav-item" to="/">Profil</NavLink>
                        <NavLink className="Nav-item" to="/">Réglage</NavLink>
                        <NavLink className="Nav-item" to="/">Communauté</NavLink>
                    </ul>
                </Nav>
            </header>
        </div>
    );
}
export default Nav;
