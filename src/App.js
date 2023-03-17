import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArtistProfile from './Artist/ArtistProfile';
import SearchPage from './Search/Search';
import HomePage from './Home/Home';

function App() {
  return (
    <Router>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/search" component={SearchPage} />
    <Route exact path="/artists/:id" component={ArtistProfile} />
  </Router>
  );
}

export default App;
