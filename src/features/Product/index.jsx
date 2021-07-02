import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './pages/ListPage';

ProductFeature.prototypes = {

};

function ProductFeature(props) {

    const match = useRouteMatch();

    return (
        <Box pt={4}>
          product feature
          <Switch>
              <Route path={match.url} exact component={ListPage}/>
          </Switch>
        </Box>
        
    );
}

export default ProductFeature ;
