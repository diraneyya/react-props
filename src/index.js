import React from 'react';
import ReactDOM from 'react-dom/client';

const appRoot = ReactDOM.createRoot(document.body);

function AppComponent(props) {
    return <h1>Hello React! My lucky number is '{ props.random }'</h1>;
}

setInterval(() => {
    let randomNumber = Math.floor(Math.random() * 9999);
    appRoot.render( 
        <AppComponent random={ randomNumber } />
    );

}, 1000);
