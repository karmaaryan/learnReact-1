import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css'
import {firstBook, secondBook, thirdbook} from './books'
import booksObj from "./books"

const MainComponent=()=>{
    return <section className="main">
        <h1>Amazon Best Sellers</h1>  
        <Booklist/>
    </section>
} 

// const mapping = books.map((input)=>{
//     return input;
// })

// function BookList() {
//     return <section className='booklist'>{books}</section>;
// }


// const return1 = ["aryan","karma","is","the","best","coder"];
// this map returns the headings to the array values
/*  const return2 = return1.map((input)=>{
         return <h4>{input}</h4>
    })
    console.log(return2);
*/

// this map function returns the author names with perfect iteration int the objects;
/*  const return2 = booksObj.map((input)=>{
        console.log(input)
        return <h2>{input.author}</h2>;
    })
*/
// now we are creating a fucntion that would be returning the whole function
// const returnBook = booksObj.map((input)=>{
//     return <Book book={input}/>
// })



const Booklist=()=>{
    return <div className="booklist">
        {/* working approach */}
        {booksObj.map((input)=>{
            return <Book book={input}/>
        })}
        {/* <Book img={firstBook.img} auBthor={firstBook.author} name={firstBook.name}/> */}
        {/* <Book img={secondBook.img} author={secondBook.author} name={secondBook.name}/> */}
        {/* <Book img={thirdbook.img} author={thirdbook.author} name={thirdbook.name}/> */}
        {/* <section>{return1}</section> */}
        {/* <section>{return2}</section> */}
        {/* this is not working right now */}
        {/* {returnBook(booksObj)} */}  
        {/* <Book book={firstBook} />
        <Book book={secondBook} />
        <Book book={thirdbook} /> */}
    </div>
}
const Book=(props)=>{
    const {img, author, name, id} = props.book;
    return <div className="book">
        <img src={img}/>
        <h4>{name}</h4>
        <p>{author}</p>
    </div>
}
const Root = ReactDom.createRoot(document.getElementById("root"));

Root.render(
    <MainComponent/>
)