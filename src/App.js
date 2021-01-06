import Navbar from "./components/Navbar/Navbar";
import Categary from "./components/Categaries/Categary";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mobile from "./components/Mobile/Mobile";
import Laptop from "./components/Laptop/Laptop";
import Kart from './components/Kart/Kart'
import phoneZoom from "./components/phone-zoom/phoneZoom";
import SearchFilter from "./components/SearchFilter/SearchFilter";
import ProductCard from "./components/productCard";
function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <SearchFilter />
        <Categary />   
        
        <Switch>
          <Route path="/mobile" component={Mobile} />
          <Route path="/laptop" component={Laptop} />
          <Route path="/Kart" component={Kart} />
          <Route path="/phone-zoom" component={phoneZoom} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
