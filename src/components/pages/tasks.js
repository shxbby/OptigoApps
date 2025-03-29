import { useState } from "react";
import { Calendar } from "lucide-react";
import "./tasks.css";

export function AddTaskForm({ onClose = () => {}, onSave = () => {} }) {
  const [formMode, setFormMode] = useState("single");
  const [isMilestone, setIsMilestone] = useState(false);
  const [taskData, setTaskData] = useState({
    taskName: "", 
    category: "",
    department: "",
    assignTo: "",
    status: "",
    priority: "",
    project: "",
    startDate: "",
    dueDate: "",
    estimate: "",
    actualEstimate: "",
    finalEstimate: "",
    remark: "",
    attachment: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle Save Task
  const handleSave = () => {
    console.log("Save button clicked. Task data:", taskData);
    onSave(taskData); // Pass the task data to the parent component
  };

  return (
    <div className="add-task-modal">
      <div className="add-task-header">
        <h2>Add Task</h2>
        <button className="close-button" onClick={() => {
          console.log("Cancel button clicked.");
          onClose();
        }}>
          ×
        </button>
      </div>

      <div className="divider"></div>

      <div className="form-mode-toggle">
        <button
          className={`mode-button ${formMode === "single" ? "active" : ""}`}
          onClick={() => setFormMode("single")}
        >
          <span className="mode-icon single-icon"></span>
          Single
        </button>
        <button
          className={`mode-button ${formMode === "bulk" ? "active" : ""}`}
          onClick={() => setFormMode("bulk")}
        >
          <span className="mode-icon bulk-icon"></span>
          Bulk
        </button>
      </div>

      <div className="milestone-checkbox">
        <input
          type="checkbox"
          id="milestone"
          checked={isMilestone}
          onChange={() => setIsMilestone(!isMilestone)}
        />
        <label htmlFor="milestone">Milestone</label>
      </div>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="taskName">Task Name</label>
          <input
            type="text"
            id="taskName"
            placeholder="Enter task name"
            value={taskData.taskName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <div className="select-wrapper">
            <select
              id="category"
              value={taskData.category}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="development">Development</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="department">Department</label>
          <div className="select-wrapper">
            <select
              id="department"
              value={taskData.department}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Department
              </option>
              <option value="engineering">Engineering</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="assignTo">Assign To</label>
          <div className="select-wrapper">
            <select
              id="assignTo"
              value={taskData.assignTo}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select assignees
              </option>
              <option value="john">John Doe</option>
              <option value="jane">Jane Smith</option>
              <option value="alex">Alex Johnson</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <div className="select-wrapper">
            <select
              id="status"
              value={taskData.status}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="todo">To Do</option>
              <option value="inProgress">In Progress</option>
              <option value="review">Review</option>
              <option value="done">Done</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="priority">Priority</label>
          <div className="select-wrapper">
            <select
              id="priority"
              value={taskData.priority}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Priority
              </option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="project">Project</label>
          <div className="select-wrapper">
            <select
              id="project"
              value={taskData.project}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Project
              </option>
              <option value="website">Website Redesign</option>
              <option value="mobile">Mobile App</option>
              <option value="crm">CRM Implementation</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start Date</label>
          <div className="date-input-wrapper">
            <input
              type="text"
              id="startDate"
              placeholder="DD/MM/YYYY"
              value={taskData.startDate}
              onChange={handleChange}
            />
            <Calendar className="calendar-icon" size={18} />
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="dueDate">Due Date</label>
          <div className="date-input-wrapper">
            <input
              type="text"
              id="dueDate"
              placeholder="DD/MM/YYYY"
              value={taskData.dueDate}
              onChange={handleChange}
            />
            <Calendar className="calendar-icon" size={18} />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="estimate">Estimate</label>
          <input
            type="text"
            id="estimate"
            value={taskData.estimate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="actualEstimate">Actual Estimate</label>
          <input
            type="text"
            id="actualEstimate"
            value={taskData.actualEstimate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="finalEstimate">Final Estimate</label>
          <input
            type="text"
            id="finalEstimate"
            value={taskData.finalEstimate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group full-width">
          <label htmlFor="remark">Remark</label>
          <textarea
            id="remark"
            placeholder="Add a remark"
            value={taskData.remark}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="form-group full-width">
          <label>Attachment</label>
          <button className="upload-button">UPLOAD FILE</button>
        </div>
      </div>

      <div className="form-actions">
        <button className="cancel-button" onClick={() => {
          console.log("Cancel button clicked.");
          onClose();
        }}>
          Cancel
        </button>
        <button className="save-button" onClick={handleSave}>
          SAVE TASK
        </button>
      </div>
    </div>
  );
}

export default AddTaskForm;