import React, {Component} from 'react';
import {Link} from "react-router-dom";

import logo from '../assets/img/pamaxie-text-logo.png'

export default class FeatureCard extends Component {
    constructor(params) {
        super(params);
        this.image = params.image;
        this.headerText = params.headerText;
        this.bodyText = params.bodyText;
        this.buttonInfo = params.buttonInfo;
    }
    render(){
        return (
            <div className="flex flex-row h-screen-24 bg-secondary">
                <div className="flex flex-col flex-1 justify-center items-center m-8">
                    <img src={logo} alt="" className="h-32 object-contain"/>
                    <h1 className="m-2-8 text-4xl text-gray-primary font-bold">{this.headerText}</h1>
                    <p className="m-2-8 text-2 text-gray-primary text-center" style={{maxWidth: '830px'}}>
                        {this.bodyText}
                    </p>
                    {this.buttonInfo.map((buttonInfo) => {
                        return <Link to={{pathname: buttonInfo.path}} className="block px-4 py-2 bg-tertiary rounded-full text-gray-primary hover:bg-primary" style={{margin: '2.5px'}}>{buttonInfo.text}</Link>
                    })}
                </div>
                <img src={this.image} alt="" className="flex-2-5 h-full object-cover overflow-hidden bg-tertiary"/>
            </div>
        )
    }
}