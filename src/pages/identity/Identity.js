import React, { useState } from 'react';
import Dashboard from './Dashboard'
import Login from "./Login";

import useToken from '../../components/identity/UseToken';

export default function Home() {
    const { token, setToken } = useToken();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div>
            <Dashboard></Dashboard>
        </div>
    )
}