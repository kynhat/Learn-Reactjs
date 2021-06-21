import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ListPage from './pages/ListPage';
import DetaiPage from './pages/DetailPage';
import { Route, Switch, useRouteMatch } from 'react-router';
import NotFound from '../../components/NotFound';

const TodoFeature = () => {

  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.path} component={ListPage} exact/>
        <Route path={`${match.path}/:todo:Id`} component={DetaiPage} exact/>

        <Route component={NotFound}/>
      </Switch>
    </div>
  )
}
 
export default TodoFeature ;
