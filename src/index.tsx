import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from "./redax";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const store=setupStore()
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <style>{'body { background-color:#140B2B; }'}</style>
            <App />
        </BrowserRouter>
    </Provider>
);
