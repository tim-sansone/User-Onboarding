import './App.css';
import React from "react";

function App() {
  return (
    <form>
      <label>First Name
        <input 
          name="first_name"
          type="text"
          value={form["first_name"]}
          onChange={oncChange}
          placeholder="First name..."
        />
      </label>
      <label>Last Name
        <input 
          name="last_name"
          type="text"
          value={form["last_name"]}
          onChange={oncChange}
          placeholder="Last name..."
        />
      </label>
    </form>
  );
}

export default App;
