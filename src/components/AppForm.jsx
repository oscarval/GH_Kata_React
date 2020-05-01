import React, { useState } from "react";

const AppForm = () => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setValues({ ...values, [name]: value });
  };

  const [values, setValues] = useState({
    firstname: "name",
    surname: "surname",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form send succesfully");
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>Forms</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type='text'
              name='firstname'
              value={values.firstname}
              onChange={handleChange}
            />
            <input
              type='text'
              name='surname'
              value={values.surname}
              onChange={handleChange}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </header>
    </div>
  );
};

export default AppForm;
