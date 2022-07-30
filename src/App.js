import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductList from "./containers/ProductList";
import ProductDetails from "./containers/ProductDetails";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/actions/productAction";

function App() {
  const dispatcher = useDispatch();
  useEffect(() => {
    dispatcher(fetchProducts());
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:productId" exact component={ProductDetails} />
          <Route> Sorry, Page Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
