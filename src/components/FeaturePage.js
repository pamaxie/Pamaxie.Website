import React, { Component } from 'react';

import logo from '../assets/img/pamaxie-text-logo.png'

export default class FeatureCard extends Component {
    constructor(params) {
        super(params);
        this.image = params.image;
        this.headerText = params.headerText;
        this.innerHtml = params.innerHtml;
    }
    render(){
        return (
            <div className="flex flex-row h-screen-24 bg-secondary">
                <div className="flex-1 m-8">
                    <img src={logo} alt="" className="h-32 object-contain"/>
                    <h1 className="m-2-8 text-4xl text-gray-primary">{this.headerText}</h1>
                    <p className="m-2-8 text-2 text-gray-primary" dangerouslySetInnerHTML={{__html: this.innerHtml}}/>
                </div>
                <img src={this.image} alt="" className="flex-2-5 h-full object-cover overflow-hidden"/>
            </div>
        )
    }
}