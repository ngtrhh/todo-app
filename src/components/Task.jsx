import PropTypes from "prop-types";
import { useState } from "react";

const Task = ({
  item,
  editTask = null,
  deleteTask = null,
  updateTask = null,
}) => {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [name, setName] = useState(item.name);

  return (
    <div className="task">
      {toggleEdit ? (
        <div className="edit-input">
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <button
            className="edit material-symbols-outlined"
            onClick={() => {
              editTask(item.id, name);
              setToggleEdit(!toggleEdit);
            }}
          >
            check
          </button>
          {/* <button
            className="edit material-symbols-outlined"
            onClick={
              editTask ? () => editTask(item.id) : null
            }
          >
            cancel
          </button> */}
        </div>
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => updateTask(item.id)}
            />
          </label>
          <span
            className={item.completed ? "done" : ""}
            onDoubleClick={() => {
              setToggleEdit(!toggleEdit);
            }}
          >
            {item.name}
          </span>
        </>
      )}
      <button
        className="delete material-symbols-outlined"
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  );
};

Task.propTypes = {
  deleteTask: PropTypes.func,
  editTask: PropTypes.func,
  updateTask: PropTypes.func,
};

export default Task;
