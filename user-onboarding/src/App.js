import './App.css';
import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import schema from "./Validation/Schema";
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

const initialDisabled = true;


export default function App() {
  
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

  useEffect(() => {
    schema.isValid(form).then(res => setDisabled(!res));
  }, [form])

  return (
    <Form
      form={form}
      errors={errors}
      disabled={disabled}
      change={inputChange}
    />
  );
}
