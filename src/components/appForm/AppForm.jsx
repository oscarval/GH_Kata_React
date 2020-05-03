import React, { useState } from "react";
import "./AppForm.scss";

const AppForm = () => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    setValues({ ...values, [name]: value });
  };

  const [values, setValues] = useState({
    firstname: "",
    surname: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Form send succesfully\nName:${values.firstname}\nSurname:${values.surname}`
    );
  };

  return (
    <div className='AppForm'>
      <h2>Forms</h2>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='firstname'
          value={values.firstname}
          onChange={handleChange}
          placeholder='Enter a firstname'
          autoComplete="off"
        />
        <input
          type='text'
          name='surname'
          value={values.surname}
          onChange={handleChange}
          placeholder='Enter a surname'
          autoComplete="off"
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default AppForm;
