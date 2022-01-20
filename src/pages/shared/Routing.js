import React from 'react';
import {Routes, Route} from "react-router-dom";

import Home from "../home/Home";
import DataPrivacy from "../features/DataPrivacy";
import DataDetection from "../features/DataDetection";
import SafeSpace from "../features/SafeSpace";
import Improvements from "../features/Improvements";
import Moderation from "../features/Moderation";
import OpenSource from "../features/OpenSource";

import Identity from '../identity/Identity';

import Error404 from '../error/404'

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

            <Route exact path='/Identity' element={<Identity/>}/>

            <Route exact path='*' element={<Error404/>}/>
        </Routes>
    );
}