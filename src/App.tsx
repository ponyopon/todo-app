import React, {useState} from "react";
import "./styles.scss";
import {InputTodo} from './components/InputTodo';
import {IncompleteTodos} from './components/IncompleteTodos';
import {CompleteTodos} from './components/CompleteTodos';

 const App = () => {
  const [todoText, setTodoText]= useState<string>('');
  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);

  const onChangeTodoText = (event:any) => setTodoText(event.target.value)

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos : string[] = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index:number) => {
    const newTodos: string[] = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index:number) => {
    const newIncompleteTodos: string[] = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos: string[] = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index:number) => {
    const newCompleteTodos: string[] = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos: string[] = [...incompleteTodos, completeTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
    
  }

  return (
  <>
    <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={incompleteTodos.length >= 5} />
    {incompleteTodos.length >= 5 && <p style={{color : 'red'}}>登録は5個まで</p>}
    
    <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete}  />
    <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />

  </>
  
  );
};

export default App;