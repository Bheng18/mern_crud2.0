import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store from './store';
import ItemModal from './components/itemModal';
import EditItem from './components/editItem';
import { Container } from 'reactstrap';
import { Paths } from './enums';
import Loadable from "react-loadable";
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function lazyLoad(loader) {
  return Loadable({
    loader,
    loading: () => (
      <div style={{ position: "relative", height: "100%", width: "100%" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: 40 / -2,
            marginLeft: 40 / -2
          }}
        />
      </div>
    )
  });
}

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
         
            <AppNavbar />
              <Container>
                <ItemModal />
                  <Switch> 
                    <Route exact path="/" component={ShoppingList} />
                    {/* <Route exact path="/editItem" component={EditItem} /> */}
                    <Route
                        exact
                        path={Paths.EDIT_ITEM}
                        component={lazyLoad(() =>
                          import("./components/editItem")
                        )}
                      />
                  </Switch>  
              </Container>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
