import React from 'react';
import './App.css';
import CurrencyExchangeContainer from "./containers/CurrencyExchangeContainer/CurrencyEContainer";


function App() {
    return (
        <div className="container">
            <React.Fragment>
                <CurrencyExchangeContainer />
            </React.Fragment>
        </div>
    );
}

export default App;
