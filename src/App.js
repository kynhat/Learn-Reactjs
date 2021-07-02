// import './App.css';
import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import NotFound from './components/NotFound';
import TodoFeature from "./features/Todo";
import productApi from './Api/productApi';
import CounterFeature from './features/Counter';
import Header from 'components/Header';
import ProductFeature from 'features/Product';
function App() {
  
  //test call api 
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     //neu muoon truyen them pagram 
  //     // const params = {
  //     //   _limit: 10,
  //     // };
  //     // const productList = await productApi.getAll(params);

  //     const productList = await productApi.getAll();
  //   }

  //   fetchProducts();
  // },[]);
  return (
    <div className="App">
       <Header/>


      <Switch>
        {/* <Redirect from="/home" to="/" exact/>
        <Redirect from="post-list/:postId" to="/posts/:postId" exact /> */}
        <Route path="/" component={CounterFeature} exact />
        {/* <Route path="/" component={TodoFeature} exact /> */}
        <Route path="/todos" component={TodoFeature} />
        <Route path="/products" component={ProductFeature} />

        {/* <Route component={NotFound}/> */}
      </Switch>

      {/* Footer */}
    </div>
  );
}

export default App;
