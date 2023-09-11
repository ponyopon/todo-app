import React from 'react';
import { CompleteTodosType } from '../types';

export const CompleteTodos = ({todos, onClickBack}:CompleteTodosType) => {
    return (
      <div className="complete-area">
      <p className="title">完了のTodo</p>
      <ul>
        {todos.map((todo, index) => {
          {console.log(todos)}
          return (
            <div key={todo} className="list-row">
              
              <li>{todo}</li>
            <button onClick={() => onClickBack(index)}>戻す</button>
          </div>
          )
        })}
      </ul>
    </div>
    )
}