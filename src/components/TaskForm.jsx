import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState([]);

  return (
    <div className="search-container">
      <Input
        placeholder="add details"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button
        onClick={() => addTask(task)}
        color="primary"
        style={{
          borderRadius: 12,
          padding: "20px 40px",
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default TaskForm;
