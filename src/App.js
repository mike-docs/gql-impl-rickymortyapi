import logo from './logo.svg';
import './App.css';
import CharacterList from './pages/CharactersList';
import Character from './pages/Character';
import Search from './pages/Search';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path ="/" component={CharacterList} /> 
      <Route exact path ="/:id" component={Character} /> 
      <Route exact path ="/search" component={Search} /> 
    </div>
  );
}

export default App;
