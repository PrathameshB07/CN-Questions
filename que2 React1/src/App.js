import React from "react";
import axios from "axios";

const App = () => {
  const [todo, setTodo] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(res => {
        setTodo(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      {/* Map the todo list here */}
    </div>
  );
};

export default App;
