import React,{useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [taskForm, setTaskForm] = useState({
    text: "",
    category: "",
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setTaskForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    onTaskFormSubmit?.(taskForm);
    setTaskForm({
      text: "",
      category: "",
    });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" 
        value = {taskForm.text}
        onChange={handleInputChange}
        />

      </label>

      <label>
        Category
        <select name="category" value={taskForm.category}
          onChange={handleInputChange}>
          
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
