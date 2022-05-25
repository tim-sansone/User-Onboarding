import React from "react";


export default function Form(props) {
    const { form, change } = props;

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    }
    
    return (
        <form>
        <label>First Name
            <input 
            name="first_name"
            type="text"
            value={form["first_name"]}
            onChange={onChange}
            placeholder="First name..."
            />
        </label>
        <label>Last Name
            <input 
            name="last_name"
            type="text"
            value={form["last_name"]}
            onChange={onChange}
            placeholder="Last name..."
            />
        </label>
        <label>Email
            <input 
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder="Email..."
            />
        </label>
        <label>Terms of Service
            <input 
            name="terms"
            type="checkbox"
            checked={form.terms}
            onChange={onChange}
            />
        </label>
        <button>Submit</button>
        </form>
    )
}