import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css'
// import {firstBook, secondBook, thirdbook} from './books'
import books from "./books"

const MainComponent=()=>{
    return <section className="main">
        <h1>Amazon Best Sellers</h1>  
        <Booklist/>
    </section>
} 

const mapping = books.map((input)=>{
    return input;
})

console.log(books);

const Booklist=()=>{
    return <div className="booklist">
        {/* <Book img={firstBook.img} author={firstBook.author} name={firstBook.name}/> */}
        {/* <Book img={secondBook.img} author={secondBook.author} name={secondBook.name}/> */}
        {/* <Book img={thirdbook.img} author={thirdbook.author} name={thirdbook.name}/> */}
        <Book book={books[0]} />
        <Book book={books[1]} />
        <Book book={books[2]} />
    </div>
}

const Book=(props)=>{
    const {img, author, name, id} = props.book;
    const {children} = props;
    return <div className="book">
        <img src={img}/>
        <h4>{name}</h4>
        <p>{author}</p>
        {children}
    </div>
}

const Root = ReactDom.createRoot(document.getElementById("root"));

Root.render(
    <MainComponent/>
)