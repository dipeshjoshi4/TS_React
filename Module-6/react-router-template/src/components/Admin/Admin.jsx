import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Admin = () => {
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
            </ul>
            <Outlet />
        </div>
    )
}

export default Admin