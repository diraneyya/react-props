import React from 'react';
import ReactDOM from 'react-dom/client';

const rootDOM = document.getElementById('root');
const appRoot = ReactDOM.createRoot(rootDOM);

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.random = props.random;
    }

    render() {
        return <h1>Hello React! My lucky number is '{ this.random }'</h1>;
    }
}

setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 9999);
    appRoot.render( 
        <AppComponent random={ randomNumber } />
    );

}, 1000);
