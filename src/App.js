import "./App.css"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
import { Route, Switch } from "react-router-dom";
import About from "./components/About";
import service from "./components/service";
import portfolio from "./components/portfolio";
import work from "./components/work";


function App() {
  return <> 
    
    <Particles className="particles-canvas"
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
  />
    <Navbar />
    <Switch>
   <Route path="/" component={Header} exact />
    <Route path="/about" component={About} />
    <Route path="/service" component={service} />
    <Route path="/portfolio" component={portfolio} />
    <Route path="/work" component={work} />
    <Route path="*" component={Header} />
    <Route path="/home"/>
    </Switch>
    </>
}

export default App;
