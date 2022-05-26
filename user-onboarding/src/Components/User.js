import React from "react"

export default function User({ user }) {
    
    return (
        <div className="user">
            <h3>Name: {user["first_name"]} {user["last_name"]}</h3>
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    )
}