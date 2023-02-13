import './App.css';
import React, {Component} from "react"
import Home from './components/Home';
import NavBar from './components/Navbar'
import Go from './Go';


class App extends Component{

  render(){
    return (
     <>
     <Go />
       {/* <NavBar />
     <Home /> */}
     </>
    );
  }
  
}

export default App;
