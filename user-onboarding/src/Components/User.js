import React from "react"

export default function User({ user }) {
    
    return (
        <div>
            <div>First Name: {user["first_name"]}</div>
            <div>Last Name: {user["last_name"]}</div>
            <div>Email: {user.email}</div>
        </div>
    )
}