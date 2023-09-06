import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css'

const MainComponent=()=>{
    return <>
    <Greeting0/>
    <Greeting/>
    </>
}

const Greeting0 =()=>{
    return <h2>Hey, Good morning!</h2>
}

const Greeting=()=>{
    return <h1>Hey, Good morning!</h1>
}

const Root = ReactDom.createRoot(document.getElementById("root"));

Root.render(
    <MainComponent/>
)