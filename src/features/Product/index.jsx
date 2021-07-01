import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './components/pages/ListPage';

ProductFeature.prototypes = {

};

function ProductFeature(props) {

    const match = useRouteMatch();

    return (
        <div>
          product feature
          <Switch>
              <Route path={match.url} exact component={ListPage}/>
          </Switch>
        </div>
        
    );
}

export default ProductFeature ;
