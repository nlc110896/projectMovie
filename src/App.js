import logo from "./logo.svg";
import "./App.css";
import "../../bai-cuoi-khoa/src/index.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "././container/Home";
import HomePage from "./container/Home/Homepage/index";
import { routesHome } from "./routes";

function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <Home
            key={index}
            exact={item.exact}
            path={item.path}
            component={item.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <Switch>{showLayoutHome(routesHome)}</Switch>
    </BrowserRouter>
  );
}

export default App;
