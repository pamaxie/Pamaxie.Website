import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class FeatureCard extends Component {
    constructor(params) {
        super(params);
        this.image = params.image;
        this.headerText = params.headerText;
        this.bodyText = params.bodyText;
        this.link = params.link ?? "/";
        this.buttonColor = params.buttonColor;
    }
    render(){
        return (
            <div className="flex flex-col m-3 bg-tertiary"
                 style={{height: '760px', width: '550px', filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1)) drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.05))'}}>
                <img src={this.image} alt="" className="w-full object-top object-cover overflow-hidden bg-white"
                     style={{height: '25.625rem'}}/>
                <h2 className="text-2 text-gray-primary" style={{margin: '2rem 1.125rem 0.5rem 1.125rem'}}>{this.headerText}</h2>
                <p className="flex-1 text-1 text-gray-primary" style={{margin: '1.125rem'}}>{this.bodyText}</p>
                <Link className="m-4 p-2-4 w-fit rounded-full bg-secondary hover:bg-primary" style={{color: this.buttonColor}} to={{pathname: this.link}}>
                    Learn More
                </Link>
            </div>
        )
    }
}