import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/todoList';
import queryString from 'query-string';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoForm from '../../components/todoForm';
const ListPage = () => {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },

    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },

    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];

  //?satus=new
  const location = useLocation();

  // pagram can chuyen vao
  //   pathname: '/here',
  //   search: '?key=value',
  //   hash: '#extra-information',
  //   state: { modal: true },
  //   key: 'abc123'
  const history = useHistory();

  // paggram tra ve
  //   isExact: true
  // params: {}
  // path: "/todos"
  // url: "/todos"
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);

  const [filteredStatus, setfilteredStatus] = useState(() => {
    const param = queryString.parse(location.search);
    return param.status || 'all';
  });

  const handleTodoClick = (todo, idx) => {
    const newTodoList = [...todoList];

    //cach 1

    // const newTodo = {
    //   ...newTodoList[idx],
    //   status: newTodoList[idx].status = 'new' ? 'completed' : 'new',
    // }

    // newTodoList[idx] = newTodo;

    //cach 2

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };

    setTodoList(newTodoList);
  };

  useEffect(() => {
    const param = queryString.parse(location.search);
    setfilteredStatus(param.status || 'all');
  }, [location.search]);

  const handleShowAll = () => {
    // setfilteredStatus('all');

    const queryParam = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };

  const handleShowCompletedClick = () => {
    // setfilteredStatus('completed');
    const queryParam = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };

  const handleShowNewClick = () => {
    // setfilteredStatus('new');
    const queryParam = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };

  const renderedTodolist = useMemo(() => {
    return todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  }, [todoList, filteredStatus]);

  const handleTodoFormSubmit = (value) => {
    console.log("form submit: " ,value)
  }

  return (
    <div>
      <h3>To do Form</h3>
      <TodoForm onSubmit = {handleTodoFormSubmit}/>

      <h3>To do list</h3>
      <TodoList todoList={renderedTodolist} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAll}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
};

export default ListPage;
