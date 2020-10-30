import './App.css';
import Login from './Components/login';
import Signup from './Components/signup';
import AdminDashboard from './Components/admindashboard';
import GuestDashboard from "./Components/guestdashboard";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRouting from "./privaterouting";
import AddPoll from "./Components/addpoll";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"   exact  component={Login} />
        <Route path="/signup"  exact component={Signup} />
        <PrivateRouting path="/admindashboard"  exact component={AdminDashboard} />
        <PrivateRouting path="/guestdashboard"  exact component={GuestDashboard} />
        <PrivateRouting path="/addpoll" component={AddPoll} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
