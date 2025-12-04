import { useState } from "react";
import viteLogo from "/to-do-list.svg";
import "./App.css";
import { Button, Container, ListGroup } from "react-bootstrap";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = () => {
    if (!task.trim()) return;
    const updateList = [...list, task];
    setList(updateList);
    console.log("first", updateList);
    setTask("");
  }

  const editTask =(index) =>{
    const update = prompt("edit task", list[index]);
    if(update && update.trim()){
      const updateList = [...list];
      updateList[index] = update;
      setList (updateList);
      console.log("edit", updateList)
    }
  };

  const deleteTask =(index) =>{
    if (confirm("are you sure?")){
    const updateList = list.filter((_,i)=>i !== index);
    setList(updateList);
    alert("data is deleted")
  }
};

return (
  <>
    <Container>
      <h1 className="app">To Do</h1>
        <form>
          <input
            className="input"
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <Button
            className="btn-primary"
            variant="primary"
            onClick={handleSubmit}
          >Add</Button>
        </form>
<ul className="list">
        <ListGroup className="mt-3">
          {list.map((t, index) => (
            
            <ListGroup.Item
              key={index}
              className="list-group"
            >{t}
                <Button
                onClick={() =>editTask(index)}
                className="btn-secondary"
                >Edit</Button>

               <Button
                onClick={() =>deleteTask(index)}
                className="btn-warning"
              >Delete</Button>

            </ListGroup.Item>
          ))}
        </ListGroup>
        </ul>
    </Container>
    </>
  );
}

export default App;
