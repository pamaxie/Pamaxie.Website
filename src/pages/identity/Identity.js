import React, { useState } from 'react';
import {Login, Dashboard} from './';

import useToken from '../../services/UseToken';

export function Identity() {
    //const { token, setToken } = useToken();
    //if(!token) {
    //    return <Login setToken={setToken} />
    //}

    return (
        <div>
            <Dashboard/>
        </div>
    )
}