import React from 'react';
import ReactDOM from 'react-dom/client';

const rootDOM = document.getElementById('root');
const appRoot = ReactDOM.createRoot(rootDOM);

setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 9999);
    appRoot.render( 
        <>
            <h1>Hello React!</h1>
            <h2>My favorite number is { randomNumber }</h2>
        </>
    );

}, 1000);
