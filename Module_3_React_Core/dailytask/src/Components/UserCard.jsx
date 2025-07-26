import React from "react";

const UserCard = ({ Name, Professional }) => {
    return (
        <div style={{ border: "1px solid grey", padding: "10px", margin: "10px" }}>
            <h3>{Name}</h3>
            <p>{Professional}</p>
        </div>
    )
}

export default UserCard;