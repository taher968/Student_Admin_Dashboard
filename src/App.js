import React from 'react';
import {Admin, Resource } from 'react-admin';
import lb4Provider from 'react-admin-lb4';
import StudentList from './components/StudentList';
import FeeList from './components/FeeList';
import StudentEdit from './components/StudentEdit';
import StudentCreate from './components/StudentCreate';
import FeeEdit from './components/FeeEdit';



function App() {
  return (
    <Admin dataProvider={lb4Provider('http://localhost:3000')}>
      <Resource name='students' list={StudentList} edit={StudentEdit} create={StudentCreate} />
      <Resource name='fees' list={FeeList} edit={FeeEdit} />
    </Admin>
  );
}

export default App;
