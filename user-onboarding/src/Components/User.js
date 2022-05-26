import React from "react"

export default function User({ user, remove }) {
    
    return (
        <div className="user">
            <h3>Name: {user["first_name"]} {user["last_name"]}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>Inflight Meal:</strong> {user.meal}</p>
            <button onClick={() => remove(user.id)}>Remove</button>
        </div>
    )
}