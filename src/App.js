import "./App.css";
import { useState } from "react";

function App() {
  const [errorMgs, setErrorMgs] = useState({ name: false, email: false });

  const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const handelValidateData = (e) => {
    e.preventDefault();
    let email = false,
      name = false;
    if (e.target[0].value === "") {
      name = true;
    }
    if (e.target[1].value === "" || !mailRegex.test(e.target[1].value)) {
      email = true;
    }
    setErrorMgs({ name, email });
    if (!name && !email) {
      setErrorMgs({ name: false, email: false });
      alert("Form Registered Successfully");
    }
  };

  return (
    <>
      <div className="container">
        <h1>Registration form</h1>
        <form className="form-container" onSubmit={handelValidateData}>
          <div style={{ margin: "20px" }}>
            <div className="form-item">
              <label for="name">
                {" "}
                <span>*</span>Name
              </label>
              <input
                className={errorMgs.name ? "error-input" : null}
                type="text"
                id="name"
                placeholder="Name"
              />
              {errorMgs.name && (
                <p className="error-msg">Please enter your name</p>
              )}
            </div>
            <div className="form-item">
              <label htmlfor="email">
                {" "}
                <span>*</span>Email
              </label>
              <input
                className={errorMgs.email ? "error-input" : null}
                type="text"
                id="name"
                placeholder="Email"
              />
              {errorMgs.email && (
                <p className="error-msg">Please enter your Mail id</p>
              )}
            </div>
            <div className="form-item">
              <label for="number">Mobile Number</label>
              <input type="text" id="name" placeholder="Mobile number" />
            </div>
            <div className="form-item">
              <label for="country">Country</label>
              <input type="text" id="name" placeholder="Country" />
            </div>
            <div className="form-item">
              <label for="state">State</label>
              <input type="text" id="name" placeholder="State" />
            </div>
            <div className="form-item">
              <label for="message"> Message</label>
              <textarea
                type="text"
                id="message"
                placeholder="Type your message here..."
              />
            </div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
