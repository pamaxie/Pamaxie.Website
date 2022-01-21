import React from 'react';

export function FootNote() {
    return (
        <div className="relative w-full bg-secondary" style={{height: '24rem'}}>
            <div className="flex flex-col absolute m-auto top-0 bottom-0 left-0 right-0 h-fit items-center"
                 style={{width: '53rem'}}>
                <h1 className="contents text-4xl text-gray-primary text-center">And the best part: </h1>
                <h1 className="contents text-4xl text-center" style={{color: '#DAB65E'}}>its free. </h1>
                <h1 className="contents text-4xl text-center" style={{color: '#DA615E'}}>forever.</h1>
                <p className="m-3 text-2xl text-gray-primary text-center">We developed this solution to be free to use
                    and easy to self host. We focus on high accessibility, making it easy to use even if you aren’t an
                    experience developer. We offer documentation in multiple languages, that has been translated by our
                    community. We also don’t collect any user data that isn’t required to run the service!</p>
                <button className="m-auto-4 p-2-4 left-0 right-0 rounded-full text-gray-primary bg-tertiary">Create
                    Account
                </button>
            </div>
        </div>
    )
}