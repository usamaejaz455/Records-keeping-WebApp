import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Textform from "./Components/Textform";
import SubmitBtn from "./Components/SubmitBtn";
// import Fields from "./Components/Fields";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    if (name.trim() === "" || email.trim() === "") {
      alert("Please enter both name and email.");
    } else {
      setData([...data, { email, name }]);
      setName("");
      setEmail("");
    }
  };

  const dltData=(index)=>{
    let arr=data;
    arr.splice(index,1);
    setData([...arr]);
  }
  return (
    <div style={{ backgroundColor: "beige", minHeight: "100vh" }}>
      <Navbar />
      <div
        style={{
          textAlign: "center",
          backgroundColor: "gray",
          margin: "0px",
          padding: "7px",
          width: "100%",
        }}
      >
        <Header />
      </div>
      <div
        className="container-fluid my-3"
        style={{ justifyContent: "center" }}
      >
        <Textform
          value={name}
          onChange={(event) => setName(event.target.value)}
          label="Name"
        />
        <div className="my-2">
          <Textform
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            label="Email"
          />
        </div>
        <div onClick={addData}>
          <SubmitBtn />
        </div>
      </div>
      <div
        className="container-fluid d-flex align-items-center justify-content-between my-2"
        style={{ backgroundColor: "darkkhaki", width: "60%", padding: "10px" }}
      >
        <h4>Name:</h4>
        <h4>Email:</h4>
        <h4>Remove</h4>
      </div>
      {data.map((element, index) => {
        return (
          <div
            key={index}
            className="container-fluid d-flex align-items-center justify-content-between my-2"
            style={{
              backgroundColor: "darkkhaki",
              width: "60%",
              padding: "10px",
            }}
          >
            <h4>{element.name}</h4>
            <h4>{element.email}</h4>
            <button onClick={()=>dltData(index)} className="btn btn-danger">Remove</button>
          </div>
        );
      })}
    </div>
  );
};
export default App;
