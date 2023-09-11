import React from 'react';
import { TodoType } from '../types';

const style = {
  backgroundColor: '#c1ffff',
  width: '400px',
  height: '30px',
  borderRadius: '8px',
  padding: '8px',
  margin: '8px'
}

export const InputTodo = ({todoText, onChange, onClick, disabled}:TodoType) => {
    return (
        <div style={style}>
      <input disabled={disabled} placeholder="Todoを入力" value={todoText} onChange={onChange} />
      <button disabled={disabled} onClick={onClick}>追加</button>
    </div>
    );

};