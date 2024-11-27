import logo from "./logo.svg";
import "./App.css";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import About from "./component/About";
import Story from "./component/Story";
import Team from "./component/Team";
import Testimonial from "./component/Testimonial";

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Hero/>
        <About/>
        <Story/>
        <Team/>
        \<Testimonial/>
      </div>
    </div>
  );
}

export default App;
