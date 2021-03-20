import { Switch, Route } from "react-router-dom"
import './App.css';
import AddEditContact from "./components/AddEditContact/AddEditContact";
import ContactList from "./components/ContactList/ContactList";
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path="/(add_contact|edit_contact)" component={AddEditContact} />
      </Switch>
    </div>
  );
}

export default App;
