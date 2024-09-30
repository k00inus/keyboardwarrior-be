import Keyboard from "./Keyboard"
import { Link } from "react-router-dom";

function Home(){

    return (
        <>
        <nav>
        <Link className="link" to="/login">
          Login
        </Link>
        </nav>
        <h1>Le Keyboard Warrior</h1>
        <br/>
        <br/>
        <h2>WPM:100 Accuracy: 50%</h2>
        <Keyboard/>
        </>
    )
}


export default Home