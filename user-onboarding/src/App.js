import './App.css';
import React, { useState } from "react";
import Form from "./Components/Form"

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  terms: false,
}


export default function App() {
  
  const [form, setForm] = useState(initialValues)

  const inputChange = (name, value) => {
    setForm({...form, [name]: value})
  }

  return (
    <Form form={form} change={inputChange}/>
  );
}
