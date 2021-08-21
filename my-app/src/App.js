import logo from './logo.svg';
import './App.css';
import PersonList from './Components/PersonList'
import PersonInput from './Components/PersonInput'
function App() {
  return (
    <div className="contner" >
    <h1> Customer List</h1>
     <PersonInput/>
        
      <PersonList/>

    </div>
  );
}

export default App;
