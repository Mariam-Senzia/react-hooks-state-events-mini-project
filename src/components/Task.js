import React,{useState} from "react";

function Task({text , category ,onDelete}) {
  const [isNotDeleted, setIsNotDeleted] = useState(true);

  function handleDelete () {
    setIsNotDeleted(false);////updates to deleted
    onDelete?.() ///// if on delete is a function,handles deletion logic
  }

  return isNotDeleted ? (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>DELETE</button>
    </div>
  ) : null;
}

export default Task;
