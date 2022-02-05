import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <h1 className="title">you are welcome to UIB e-wallet</h1>
            <form className="login">
                <label><i class="fas fa-user"></i>
                    
                    <input type="text"  placeholder="username"/>
                </label>
                <label>
                <i class="fas fa-at"></i>
                    <input type="email" placeholder="Enter email" />
                </label>

                <label><i class="fas fa-lock"></i>
                <input type="password" placeholder="*********" />
                </label>

                <p>
                    <a href={"https://www.uib.com.tn/aide/non-categorise/aide"}>
                        forget password !?
                    </a>
                </p>
                <button style={{ background: "rgb(68, 98, 233)" }}>
                    LOGIN
                </button>
            </form>
        </div>
    );
}

export default App;
