
import './App.css';
import Navbar from '../src/component/Navbar';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
     <Router>
          <Navbar />
          <Switch>
            <Route path= "/" exact component={Home}/> 
          </Switch>
     </Router>
      
    
    </div>
  );
}

export default App;
