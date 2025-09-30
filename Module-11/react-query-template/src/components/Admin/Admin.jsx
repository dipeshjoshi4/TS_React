import React from 'react'
import { Link, Navigate, Outlet } from "react-router-dom";

const Admin = () => {

    const user = { role: "admin" }
    if (user.role !== "admin") {
        return <Navigate to="/" />
    }

    return (
        <div>
            <h1>Admin Page</h1>
            <ul>
                <li>
                    <Link to="/admin/sales">Sales</Link>
                </li>
                <li>
                    <Link to="/admin/sellers">Sellers</Link>
                </li>
                <li>
                    <Link to="/admin/users">User</Link>
                </li>
            </ul>
            <Outlet />
        </div>
    )
}

export default Admin