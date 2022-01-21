import React, {Component} from 'react';

let idButton;
let idContent;

//Clicking dropdown button will toggle display and prevent outside click from triggering
function dropdown(e) {
    document.getElementById(idContent).classList.toggle('hidden');
    e.stopPropagation();
}

//Closes the menu if outside clicks are triggered
window.onclick = function(e) {
    if (!e.target.matches(idButton)) {
        let dropdown = document.getElementById(idContent)
        if (!dropdown.classList.contains('hidden')) {
            dropdown.classList.add('hidden');
        }
    }
}

export class Dropdown extends Component {
    constructor(params) {
        super(params);
        this.idButton = params.id + "Button";
        this.idContent = params.id + "Content";
        this.innerHtml = params.innerHtml;
        this.content = params.content;
    }
    componentDidMount() {
        idButton = this.idButton;
        idContent = this.idContent;
    }
    render(){
        return (
            <div className="relative inline-block">
                <button id={this.idButton} onClick={dropdown}
                        className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-primary border-b border-gray-100 md:p-0 md:w-auto md:border-0 focus:outline-none">
                    {this.innerHtml}
                </button>
                <div id={this.idContent}
                     className="absolute w-40 bg-secondary rounded text-1 text-gray-primary list-none shadow z-50 hidden">
                    {this.content}
                </div>
            </div>
        )
    }
}