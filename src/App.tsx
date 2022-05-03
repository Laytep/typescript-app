import React from 'react';
import Card, { CardVariant } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';

const App = () => {
  const users: IUser[] = [
    {id: 1, name: 'Laytep', email: 'XYZ@gmail.com', address: {city: 'Warsaw', street: 'Suwalska', zipcode: '123'}},
    {id: 2, name: 'Jessy', email: 'jessy@gmail.com', address: {city: 'Warsaw', street: 'Elska', zipcode: '322'}}
    
  ]
  return (
    <div>
      <Card onClick={(num)=> console.log('click', num)} variant={CardVariant.outlined} width='200px' height='200px'>
        <button>Button</button>
        <div>XYZ</div>
      </Card>
        <UserList users={users}></UserList>
    </div>
  );
};

export default App;
