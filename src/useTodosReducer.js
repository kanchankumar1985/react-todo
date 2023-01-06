import { useReducer } from 'react';

function returnMutatedState(state , action) {
    return {todos : state.todos.map(todo=> {
      if(action.id === todo.id) {
        return {...todo , completed : !todo.completed};
      } else {
        return todo;
      }
    })}
  }
  
  function reducer(state , action) {
    switch (action.type){
      case "COMPLETED" : return returnMutatedState(state , action)
      case "UNCOMPLETED" : return returnMutatedState(state , action)
      default : return {todos : state.todos};
    }
  }

export default function useTodosReducer(todos) {
   return useReducer(reducer, {todos});
}
