import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {books} from './books.js'
// import books from './books.js' (in case of export default)
import {Box} from './box'
/*  with named exports names MUST match
    with default exports,can rename but only one per file   
*/

const Greeting = () => { return <div className='greeting'>
        <Heading/>
        <Contatiner/>
    </div>
}

const Heading =()=>{ return <div className='heading'>
    <h1> Amazon Best Sellers </h1>
</div>
}

// const firstBook = { 
//     imgAlt:"book1",
//     imgSrc: "https://m.media-amazon.com/images/I/71YjqWYLt4L.jpg",
//     name: "World's greatest stproes",
//     author: "by Collection books"
// };
// const secondBook = {
//     imgAlt:"Book2" ,
//     imgSrc:"https://m.media-amazon.com/images/I/81lZ-9E4F-S.jpg",
//     name:"The Diary of a Young Girl",
//     author:"Anne Frank"
// };
// const thirdBook = {
//     imgAlt:"Book3",
//     imgSrc:"https://m.media-amazon.com/images/I/71ZGznGgRDL.jpg",
//     name:"Bhagavad Gita",
//     author:"Anonymous"
// };

// Using array list except objects

// importing from books.js

// const returnBook = books.map(()=>{
//     const {imgAlt,imgSrc, name, author} = books;
//     return <Books imgAlt={imgAlt} imgSrc={imgSrc} name={name} author={author}/>
    // return <Books imgAlt={books.imgAlt} imgSrc={books.imgSrc} name={books.name} author={books.author} />
// })


// exporting box from './box.js 

const Contatiner=()=>{
    return <div className='container'>
        {/* <Box 
        imgAlt={firstBook.imgAlt} 
        imgSrc={firstBook.imgSrc} 
        name={firstBook.name} 
        author={firstBook.author}
        />
        
        <Box 
        imgAlt={secondBook.imgAlt}
        imgSrc={secondBook.imgSrc} 
        name={secondBook.name} 
        author={secondBook.author}
        >
        <p>This is rendering as children prop</p>
        </Box>
        
        <Box 
        imgAlt={thirdBook.imgAlt}
        imgSrc={thirdBook.imgSrc} 
        name={thirdBook.name} 
        author={thirdBook.author}
        /> */}

        {returnBook(books)}
</div>
}

const returnBook = (books)=>{
    // const bookid = 1;
    // const getBook=(bookid)=>{
    //     const findBook = book.find((prop)=>{
    //         return prop.id == bookid;
    //     })
    // }
    const getBook = (id) => {
        console.log(books.find((prop) => prop.id === id));
    };
    // const {imgSrc,imgAlt, name, author ,id} = book;
    // return <Box imgAlt={imgAlt} imgSrc={imgSrc} name={name} author={author} key={id} />
    return <>
    {books.map((books, index)=>{
        return <Box {...books} key={books.id} getBook={getBook} index={index}/>
    })}
    </> 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting/>);