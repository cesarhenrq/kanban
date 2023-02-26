import { useState } from 'react'

import GlobalStyle from './assets/GlobalStyle';
import AppContainer from './assets/AppContainer';

import NewTask from './components/new-task';
import ToDo from './components/to-do';
import Doing from './components/doing';
import Done from './components/done';

export default function App() {
  const [tasks, setTasks] = useState<Array<Task>>([]);

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  
  const changeStatus = (id: number, status: "todo" | "doing" | "done") => {
    setTasks(tasks.map(task => {
     return task.id === id ? {...task, status} : task}))
  }

  return (
    <AppContainer>
     <GlobalStyle/>
     <NewTask tasks={tasks} setTasks={setTasks}/>
     <ToDo tasks={tasks} deleteTask={deleteTask} changeStatus={changeStatus}/>
     <Doing tasks={tasks} deleteTask={deleteTask} changeStatus={changeStatus}/>
     <Done tasks={tasks} deleteTask={deleteTask} changeStatus={changeStatus}/>
    </AppContainer>
  );
};
