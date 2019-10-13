import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import AppNavbar from './components/AppNavbar';
import AppNavbar2 from './components/AppNavbar2';
// import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store from './store';
// import EditItem from './components/editItem';
import { Container } from 'reactstrap';
import { Paths } from './enums';
import Loadable from "react-loadable";
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './components/Dashboard';

// function lazyLoad(loader) {
//   return Loadable({
//     loader,
//     loading: () => (
//       <div style={{ position: "relative", height: "100%", width: "100%" }}>
//         <div
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             marginTop: 40 / -2,
//             marginLeft: 40 / -2
//           }}
//         />
//       </div>
//     )
//   });
// }

class App extends Component {
  render() {
    return (
      // <Router>
      //   <Provider store={store}>
          <div className="App">
            {/* <AppNavbar /> */}
              {/* <AppNavbar2 /> */}
              <Dashboard />
              {/* <Container> */}
   
              {/* </Container> */}
          </div>
      //   </Provider>
      // </Router> 
    );
  }
}

export default App;
