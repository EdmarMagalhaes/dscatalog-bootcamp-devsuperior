import React from 'react';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Admin from './pages/Admin';
import ProductDetails from './pages/Catalog/components/ProductDetails';
import Catalog from './pages/Catalog/index ';
import Home from './pages/Home';
import Auth from './pages/Auth';



const Routes = () => (
   <BrowserRouter>
   <Navbar />
    <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/products" exact>
            <Catalog />
        </Route>
        <Route path="/products/:productId">
            <ProductDetails />
        </Route>
        <Route path="/admin/auth">
            <Auth />
        </Route>
        <Redirect from="/admin" to="/admin/products" exact />
        <Route path="/admin">
            <Admin />
        </Route>
    </Switch>
   </BrowserRouter>
   
);

export default Routes;