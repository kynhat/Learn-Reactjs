// import './App.css';
import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import NotFound from './components/NotFound';
import TodoFeature from "./features/Todo";
import productApi from './Api/productApi';
import CounterFeature from './features/Counter';
function App() {
  
  useEffect(() => {
    const fetchProducts = async () => {
      //neu muoon truyen them pagram 
      // const params = {
      //   _limit: 10,
      // };
      // const productList = await productApi.getAll(params);

      const productList = await productApi.getAll();
      console.log(productList);
    }

    fetchProducts();
  },[]);
  return (
    <div className="App">
       Header

       <p><Link to="/todos">todo</Link></p>
       {/* active co the thay doi ten */}
       <p><NavLink to="/todos" activeClassName="active">todo</NavLink></p>
      <Switch>
        {/* <Redirect from="/home" to="/" exact/>
        <Redirect from="post-list/:postId" to="/posts/:postId" exact /> */}
        <Route path="/" component={CounterFeature} exact />
        {/* <Route path="/" component={TodoFeature} exact /> */}
        <Route path="/todos" component={TodoFeature} />

        <Route component={NotFound}/>
      </Switch>

      Footer
    </div>
  );
}

export default App;
