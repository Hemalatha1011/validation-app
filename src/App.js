import "./App.css";
import { useState } from "react";

function App() {
  const [errorMgs, setErrorMgs] = useState({ name: false, email: false });
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    number: "",
    country: "",
    state: "",
    message: "",
  });

  const mailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const handelValidateData = (e) => {
    e.preventDefault();
    let email = false,
      name = false;
    if (formFields.name === "") {
      name = true;
    }
    if (formFields.email === "" || !mailRegex.test(formFields.email)) {
      email = true;
    }
    setErrorMgs({ name, email });
    if (!name && !email) {
      setErrorMgs({ name: false, email: false });
      alert("Form Registered Successfully");
      setFormFields({
        name: "",
        email: "",
        number: "",
        country: "",
        state: "",
        message: "",
      });
    }
  };
  const handelChange = (e) => {
    setErrorMgs({ name: false, email: false });
    const newData = {
      ...formFields,
      [e.target.name]: e.target.value,
    };
    setFormFields(newData);
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
                name="name"
                value={formFields.name}
                onChange={handelChange}
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
                id="email"
                placeholder="Email"
                name="email"
                value={formFields.email}
                onChange={handelChange}
              />
              {errorMgs.email && (
                <p className="error-msg">Please enter your Mail id</p>
              )}
            </div>
            <div className="form-item">
              <label for="number">Mobile Number</label>
              <input
                type="text"
                id="number"
                placeholder="Mobile number"
                name="number"
                value={formFields.number}
                onChange={handelChange}
              />
            </div>
            <div className="form-item">
              <label for="country">Country</label>
              <input
                type="text"
                id="country"
                placeholder="Country"
                name="country"
                value={formFields.country}
                onChange={handelChange}
              />
            </div>
            <div className="form-item">
              <label for="state">State</label>
              <input
                type="text"
                id="state"
                placeholder="State"
                name="state"
                value={formFields.state}
                onChange={handelChange}
              />
            </div>
            <div className="form-item">
              <label for="message"> Message</label>
              <textarea
                type="text"
                id="message"
                placeholder="Type your message here..."
                name="message"
                value={formFields.message}
                onChange={handelChange}
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
