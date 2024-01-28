import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { StatusCom } from './components/StatusCom';
import { UserComp } from './components/user';
import { ReducerComp } from './components/ReducerComp';
import { ContextProvider } from './context/ContextProvider';
import { MainCom } from './context/MainCom';

function App() {

  const personObj = {
    firstName: 'Ramesh',
    lastName: 'Code'
  }

  const personList = [
    {
      firstName: 'Ramesh',
      lastName: 'Code'
    },
    {
      firstName: 'Ramesh2',
      lastName: 'Code2',
      age: 45
    },
    {
      firstName: 'Rames3h',
      lastName: 'Code3'
    },
    {
      firstName: 'Ramesh4',
      lastName: 'Code4'
    }
  ]

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: number, name: string) => {
    console.log('button clicked', event, id, name)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  return (
    <div className="App">
      <ContextProvider>
        <MainCom />
      <Greet 
        message='This is typescript leason'
        count={40}
        isVisible={false}
      />
      <Person
        details={personObj}
        ThisClick={handleClick}
        handleChange={handleChange}
        value=''
      />
      <StatusCom
        status={false}
      >
      <PersonList
        useList={personList}
      />
      </StatusCom>
      <UserComp />
      <ReducerComp />
      </ContextProvider>
    </div>
  );
}

export default App;
