import { Outlet as Page} from "react-router-dom";
import NavBar from "../NavBar";


function Layaout() {
    return (
        <main className="layout-container">
         <NavBar />
         <Page />
         <footer className="footer-container">
           <span>
            Made by{" "}
            <a href="https://github.com/Alina-Arrascaeta" target="_blank">
            Alina Mariel Arrascaeta
            </a>
           </span>
         </footer>
        </main>
    );
}

export default Layaout;