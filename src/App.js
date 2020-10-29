import './App.css';
import Login from './Components/login';
import Signup from './Components/signup';
import AdminDashboard from './Components/admindashboard';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"   exact  component={Login} />
        <Route path="/signup"  exact component={Signup} />
        <Route path="/admindashboard"  exact component={AdminDashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
