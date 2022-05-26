import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Components/Form";
import schema from "./Validation/Schema";
import User from "./Components/User"
import * as yup from "yup";

const initialForm = {
  first_name: "",
  last_name: "",
  email: "",
  terms: false
}

const initialErrors = {
  first_name: "",
  last_name: "",
  email: "",
  terms: ""
}

const initialUsers = []
const initialDisabled = true;


export default function App() {
  
  const [users, setUsers] = useState(initialUsers);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(res => setErrors({...errors, [name]: ""}))
      .catch(err => setErrors({...errors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setForm({...form, [name]: value})
  }

  const submit = evt => {
    evt.preventDefault();
    const newUser = {
      first_name: form["first_name"].trim(),
      last_name: form["last_name"].trim(),
      email: form.email.trim(),
      terms: form.terms
    }

    axios.post("https://reqres.in/api/users", newUser)
      .then(res => setUsers([...users, res.data]))
      .catch(err => console.log(err))

    setForm(initialForm);

  }

  useEffect(() => {
    schema.isValid(form).then(res => setDisabled(!res));
  }, [form])

  return (
    <>
      <header>
        <h1>The Directory</h1>
      </header>
      <div className="container">
        
          <Form
            form={form}
            errors={errors}
            disabled={disabled}
            change={inputChange}
            submit={submit}
          />
        
        <div className="users">
          {
            users.map(user => <User user={user} key={user.id}/>)
          }
        </div>
      </div>
    </>
  );
}
