import React from "react";

const Fields = (props) => {
  return (
    <div>
      <div
        className="container-fluid d-flex align-items-center justify-content-between my-3"
        style={{ backgroundColor: "darkkhaki", width: "60%", padding: "10px" }}
      >
        <h4>{props.name}</h4>
        <h4>{props.email}</h4>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default Fields;
