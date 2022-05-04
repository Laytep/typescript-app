import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventsExample';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import { ITodo, IUser } from './types/types';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import UsersPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

const App = () => {
    
 
return (
    <BrowserRouter>
            <div>
                <nav>
                    <Link to="/users">Users</Link>
                    <Link to="/todos">Todos</Link>
                </nav>
            </div>
            <Routes>
                <Route path="/users" element={<UsersPage />} />
                <Route path="/todos" element={<TodosPage />} />
                <Route path="/users/:id" element={<UserItemPage />} />
                <Route path="/todos/:id" element={<TodoItemPage />} />
            </Routes>
    </BrowserRouter>
  );
};

export default App;
