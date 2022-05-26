import React from "react";


export default function Form(props) {
    const { 
        form,
        change,
        disabled,
        errors,
        submit
    } = props;

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    }


    
    return (
        <>
            
            <form onSubmit={submit} className="form">
                <div className="form-header">
                    <h2>Create User</h2>
                </div>

                <div className="errors">
                    <div>{errors["first_name"]}</div>
                    <div>{errors["last_name"]}</div>
                    <div>{errors.email}</div>
                    <div>{errors.terms}</div>
                </div>
                <label>First Name&nbsp;
                    <input 
                    name="first_name"
                    type="text"
                    value={form["first_name"]}
                    onChange={onChange}
                    placeholder="First name..."
                    />
                </label>
                <label>Last Name&nbsp;
                    <input 
                    name="last_name"
                    type="text"
                    value={form["last_name"]}
                    onChange={onChange}
                    placeholder="Last name..."
                    />
                </label>
                <label>Email&nbsp;
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
                <button disabled={disabled}>Submit</button>
            </form>
        </>
    )
}