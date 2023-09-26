import React from "react";

function App() {
  const [a, b] = React.useState("");
  const [c, d] = React.useState([]);
  function inputNote(e) {
    b(e.target.value);
  }
  function onAdd() {
    d((prev) => {
      return [...prev, a];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={inputNote} type="text" />
        <button>
          <span onClick={onAdd}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {c.map((saman) => {
            return <li> {saman} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
