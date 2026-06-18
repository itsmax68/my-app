import { useState } from 'react'

function App() {

  const [todos , setToDos] = useState([]);
  const [input , setInput] = useState("");

  function addTodo() {
    if (input.trim() === "") return;
    setToDos([...todos, {text:input,done:false}]);
    setInput("");
  }

  function toggleTodo(index) {
    const update = todos.map((todo, i) => 
      i === index ? {...todo, done : !todo.done}: todo
    );
    setToDos(update);
  }

  function deleteTodo(index) {
    setToDos(todos.filter((_, i) => i !== index));
  }


  return (
    <div style={{ maxWidth: 480, margin: "0 auto", padding: 24 }}>
      <h1>My Todo App</h1>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo..."
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          style={{ flex: 1, padding: 8, fontSize: 16 }}
        />
        <button onClick={addTodo} style={{ padding: "8px 16px" }}>
          Add
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
            <span
              onClick={() => toggleTodo(index)}
              style={{ flex: 1, cursor: "pointer", textDecoration: todo.done ? "line-through" : "none" }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
