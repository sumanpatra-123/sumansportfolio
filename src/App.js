import "./App.css"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import { Route, Switch } from "react-router-dom";
import About from "./About";


function App() {
  return (
    <Switch>
    {/* <Particles className="particles-canvas"
    params={{
      particles: {
        number: {
          value: 30,
          density:{
            enable: true,
            value_area: 900
          }
        },
        shape: {
          type: "circle",
          stroke: {
            width: 6,
            color: "blue"
          }
        }
      }
    }}
  /> */}
    <Navbar />
    <Header />
    <Route path="/about" component={About} />
    </Switch>
  );
}

export default App;
