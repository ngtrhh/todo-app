import { useState } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

const TaskWrapper = ({ type }) => {
  const storageTasks = JSON.parse(localStorage.getItem("localTasks"));
  const [tasks, setTasks] = useState(storageTasks ?? []);

  const addTask = (task) => {
    if (task) {
      const newTask = {
        id: new Date().getUTCMilliseconds(),
        name: task,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      localStorage.setItem("localTasks", JSON.stringify([...tasks, newTask]));
    }
  };

  const deleteTask = (id) => {
    const taskDelete = tasks.filter((item) => item.id !== id);
    setTasks(taskDelete);
    localStorage.setItem("localTasks", JSON.stringify(taskDelete));
  };

  const updateTask = (id) => {
    const taskUpdate = tasks.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTasks(taskUpdate);
    localStorage.setItem("localTasks", JSON.stringify(taskUpdate));
  };

  const editTask = (id, name) => {
    const taskEdit = tasks.map((item) =>
      item.id === id ? { ...item, name: name } : item
    );
    setTasks(taskEdit);
    localStorage.setItem("localTasks", JSON.stringify(taskEdit));
  };

  return (
    <div className="main">
      {type !== "completed" && <TaskForm addTask={addTask} />}
      <div className="list">
        {type === "all"
          ? tasks.map((item, index) => {
              return (
                <Task
                  key={index}
                  item={item}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                  editTask={editTask}
                />
              );
            })
          : type === "active"
          ? tasks
              .filter((item) => !item.completed)
              .map((item, index) => {
                return (
                  <Task
                    key={index}
                    item={item}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                    editTask={editTask}
                  />
                );
              })
          : tasks
              .filter((completedTask) => completedTask.completed)
              .map((item, index) => {
                return (
                  <Task
                    key={index}
                    item={item}
                    deleteTask={deleteTask}
                    updateTask={updateTask}
                    editTask={editTask}
                  />
                );
              })}
      </div>
    </div>
  );
};

export default TaskWrapper;
