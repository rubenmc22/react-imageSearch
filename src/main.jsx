import React from 'react';
import ReactDOM from 'react-dom/client';
import  {ImageSearchApp}  from './ImageSearchApp';
import './styles.css';


const container = document.getElementById('root');
const divRoot = ReactDOM.createRoot(container);

divRoot.render(
    <React.StrictMode>
        <ImageSearchApp   />
    </React.StrictMode>
)


