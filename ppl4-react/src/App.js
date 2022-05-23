import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Overview, OverviewUsers, Revenue } from "./pages/Dashboard";
import { Master } from "./pages/Master";
import Dashboard from "./pages/Dashboard";
import DataPenguji from "./pages/DataPenguji";
import DataPeserta from "./pages/DataPeserta";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/master" exact component={Master} />
        <Route path="/datapeserta" exact component={DataPeserta} />
        <Route path="/datapenguji" exact component={DataPenguji} />
        <Route path="/master/datapenguji" exact component={DataPenguji} />
      </Switch>
    </Router>
  );
}

export default App;
