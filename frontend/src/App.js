import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {


    return (

    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">amazona</a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign in</a>
          </div>
        </header>

        <main>

          {/* Route deve ser criado sempre dentro da tag <main>
            exact serve para renderizar o component apenas se o path for exatamente esse */}
          
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/" component={HomeScreen} exact />

        </main>

        <footer className="row center">No one right reserved</footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
