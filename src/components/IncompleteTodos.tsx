import React from 'react';
import { IncompleteTodosType } from '../types';

export const IncompleteTodos = ({todos, onClickComplete ,onClickDelete}:IncompleteTodosType) => {

    return(
        <div className="incomplete-area">
      <p className="title">未完了のTodo</p>
      <ul>
        {todos.map((todo:string, index:number) => {
          return (
          <div key={todo} className="list-row">
          <li>{todo}</li>
          <button onClick={() => onClickComplete(index)}>完了</button>
          <button onClick={() => onClickDelete(index)}>削除</button>
        </div>
          );
          })}

      </ul>
    </div>
    )
}