import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg border-0 rounded-3">
              <div className="card-body p-4">
                <h2 className="card-title text-center mb-4 text-primary fw-bold">
                  📝 Njoroge's Todo List
                </h2>

                <form className="d-flex gap-2" onSubmit={onSubmitForm}>
                  <input
                    type="text"
                    className="form-control rounded-pill shadow-sm"
                    placeholder="Enter a new task..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <button className="btn btn-success rounded-pill px-4 shadow-sm">
                    Add
                  </button>
                </form>

                <p className="text-muted text-center mt-3 small">
                  Keep track of your tasks efficiently
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InputTodo;
