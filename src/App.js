import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '.\\components\\Header';
import Navbar from '.\\components\\Navbar';

function App() {
  const name = 'Alan';

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <div className="container mt-2" style={{ marginTop: 40 }}>
          <Switch>
            <Route exact path="/">
            </Route>
            <Route path="/about">
            </Route>
          </Switch>
          </div>
        <Header title={name}></Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
