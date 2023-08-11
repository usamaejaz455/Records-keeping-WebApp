import React from "react";

const Textform = (props) => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="inputName" className="col-form-label">
              {props.label}
            </label>
          </div>
          <div className="col-auto">
            <input 
            value={props.value}
            onChange={props.onChange}
            type="text" id="inputName" className="form-control" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Textform;
