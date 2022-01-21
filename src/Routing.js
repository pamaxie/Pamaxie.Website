import React from 'react';
import {Routes, Route} from "react-router-dom";

import {Home} from './pages';
import {DataPrivacy, DataDetection, SafeSpace, Improvements, Moderation, OpenSource} from './pages/features';
import {Login, Identity} from './pages/identity';

import {Error404} from './pages/error';

export default function Routing() {
    return(
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/DataPrivacy' element={<DataPrivacy/>}/>
            <Route exact path='/DataDetection' element={<DataDetection/>}/>
            <Route exact path='/SafeSpace' element={<SafeSpace/>}/>
            <Route exact path='/Improvements' element={<Improvements/>}/>
            <Route exact path='/Moderation' element={<Moderation/>}/>
            <Route exact path='/OpenSource' element={<OpenSource/>}/>

            <Route exact path='/Login' element={<Login/>}/>
            <Route exact path='/Identity' element={<Identity/>}/>

            <Route exact path='*' element={<Error404/>}/>
        </Routes>
    );
}