import "./App.css";
import Todo from "./Todo";
import TODOS from "./todos.json";
import useTodosReducer from "./useTodosReducer";

function App() {
  const [state, dispatch] = useTodosReducer(TODOS);

  return (
    <div className="App">
      <header className="App-header">
        <div className="todo-container">
          <div className="todo-title">Todos To Be Completed</div>
          <ul className="todo-ul">
            {state.todos.map(
              (todo) =>
                !todo.completed && (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    handleComplete={() =>
                      dispatch({ type: "COMPLETED", id: todo.id })
                    }
                  />
                )
            )}
          </ul>
        </div>
      </header>

      <header className="App-header">
        <div className="todo-container">
          <div className="todo-title">Completed ToDo</div>
          <ul className="todo-ul">
            {state.todos.map(
              (todo) =>
                todo.completed && (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    handleComplete={() =>
                      dispatch({ type: "UNCOMPLETED", id: todo.id })
                    }
                  />
                )
            )}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
