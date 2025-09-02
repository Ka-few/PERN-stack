import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      {/* Trigger Button */}
      <button
        type="button"
        className="btn btn-outline-warning btn-sm rounded-pill shadow-sm fw-semibold"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
      >
        ✏️ Edit
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id={`id${todo.todo_id}`}
        tabIndex="-1"
        onClick={() => setDescription(todo.description)}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-4 shadow-lg">
            {/* Header */}
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold text-gradient">Edit Task</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              ></button>
            </div>

            {/* Body */}
            <div className="modal-body">
              <input
                type="text"
                className="form-control rounded-pill shadow-sm"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Footer */}
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-success rounded-pill px-4 shadow-sm fw-semibold"
                data-bs-dismiss="modal"
                onClick={updateDescription}
              >
                ✅ Save
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary rounded-pill px-4 shadow-sm"
                data-bs-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                ❌ Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Styling */}
      <style jsx>{`
        .text-gradient {
          background: -webkit-linear-gradient(45deg, #20c997, #0d6efd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </Fragment>
  );
};

export default EditTodo;
