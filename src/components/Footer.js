import React from 'react';

export function Footer() {
    return(
        <div className="flex flex-row relative h-12 bg-primary">
            <a className="m-auto-4 text-gray-primary" href="/">Privacy Policy</a>
            <a className="m-auto-4 text-gray-primary" href="/">Support</a>
            <a className="m-auto-4 text-gray-primary" href="/">About</a>
            <a className="m-auto-4 text-gray-primary" href="/">Terms of Service</a>
            <p className="m-auto-4-auto-auto right-0 text-gray-primary">© pamaxie™ 2021 all rights reserved</p>
        </div>
    );
}