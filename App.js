import React from 'react';
import { Provider } from 'react-redux';
import { Routes } from "./src/Routes";
import { store } from './src/store';

const App = () => {
    return (
        <Provider store={ store }>
            <Routes/>
        </Provider>
    )
}

export default App;

