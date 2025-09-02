
import { Fragment } from 'react/jsx-runtime';
import './App.css';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';
import EditTodo from './components/EditTodo';

function App() {
  return (
   <div>
    <Fragment>
      <div className='container'>
        <InputTodo />  
        <ListTodos />
        
      </div>
    </Fragment>;
    </div>
  );
}

export default App;
