import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css'

const MainComponent=()=>{
    return <>
        <Booklist/>
    </>
}

const Booklist=()=>{
    return <div>
        <Book/>
        <Book/>
        <Book/>
    </div>
}

const Book=()=>{
    return <div>
        <img src='../public/img/2.jpg'/>
    </div>
}

const Root = ReactDom.createRoot(document.getElementById("root"));

Root.render(
    <MainComponent/>
)