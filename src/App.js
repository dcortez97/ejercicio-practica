import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Detalles from './components/detalles/Detalles';
// import DetallesInterior from './components/detalles/DetallesInterior';
import Productos from './components/productos/Productos';
import ProductoState from './context/productos/productoState';

function App() {
  return (
    
    <ProductoState>
      <Router>
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/detalles" component={Detalles} />

            {/* <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
            <RutaPrivada exact path="/proyectos" component={Proyectos} /> */}
          </Switch>
        </Router>
      </ProductoState>
  );
}

export default App;
